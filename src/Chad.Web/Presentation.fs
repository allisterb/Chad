namespace Chad.Web

open System

open WebSharper
open WebSharper.JavaScript

open Chad.NLU

[<JavaScript;AutoOpen>]
[<RequireQualifiedAccess>]
module Presentation =
    let (|What|_|) =
        function
        | "what is this?" -> Some()
        | _ -> None

    let (|Debug|_|) =
        function
        | "debug" -> Some ()
        | _ -> None

    let (|DebugEntities|_|) : string -> string option=
        function
        | s when s.StartsWith "debug-entities " -> let dt = s.Replace("debug-entities ", "") in Some dt
        | _ -> None
