namespace Chad.Web


open System
open System.Collections.Generic;
open System.Linq

open FSharp.Control

open WebSharper
open Npgsql.FSharp
open Humanizer
open Newtonsoft.Json

open Chad
open Chad.Models

module GnuCash =

    let private pgdb =
        Sql.host (Runtime.Config("PGSQL"))
        |> Sql.port 5432
        |> Sql.username "gnucash"
        |> Sql.password "gnucash"
        |> Sql.database "gnucash"
        |> Sql.sslMode SslMode.Prefer
        |> Sql.config "Pooling=true"
        |> Sql.formatConnectionString
        |> Sql.connect

    [<Rpc>]
    let getAcccounts() =
        pgdb
        |> Sql.query "SELECT * FROM public.accounts"
        |> Sql.executeAsync (fun read -> {
            Guid =  read.string("guid")
            Name = read.string("name")
            Type = read.string("account_type") |> AccountType.Parse
            ParentGuid = read.stringOrNone("parent_guid") |> function | Some g -> g | _ -> ""
            Description = read.string("description")
            
        }) 
        |> Async.map(
            function 
            | Ok a  -> (if a.Length > 0 then infof "Retrieved {0} accounts from database." [a.Length]; Some a else None) 
            | Error exn -> errex "Error retrieving accounts from database." exn []; None)


    let accounts = 
        match Async.RunSynchronously(getAcccounts()) with
        | Some a -> a
        | None -> failwith ""

    [<Rpc>]
    let getaccountTypes() = accounts |> List.map(fun a -> a.Type.ToString()) |> List.distinct

    [<Rpc>]
    let getAccountsByCategory(category:string) = accounts |> List.filter(fun a -> a.Type.ToString().ToUpper() = category.ToUpper() && not (a.Name.StartsWith("Imbalance")))


    [<Rpc>]
    let createAccount (name:string) (t:string) (parentGuid:string) (description:string): Async<Result<unit, string>> = 
        pgdb
        |> Sql.query 
            """INSERT INTO public.accounts(guid, name, account_type, commodity_guid, commodity_scu, non_std_scu, parent_guid, code, description, hidden, placeholder) 
                    VALUES(@g, @n, @t, 'c20ba729f3754a23bf4b5930ea19f726', 100, 0, @pg, '', @d, 0, 0);
            """
        |> Sql.parameters [
            ("g", Sql.string (Guid.NewGuid().ToString())) 
            ("n", Sql.string name)
            ("t", Sql.string t)
            ("pg", Sql.string parentGuid)
            ("d", Sql.string description)
        ]
        |> Sql.executeNonQueryAsync
        |> Async.map(function | Ok j  -> Ok() | Error exn -> err(exn.Message); Error(exn.Message))
