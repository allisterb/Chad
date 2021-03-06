namespace Chad.Web

open WebSharper
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.JavaScript
open WebSharper.JQuery

module Resources =
    open WebSharper.Core.Resources
    
    type CSS() =
        inherit BaseResource("bootstrap.flatlyv4.min.css")
    type PopperJS() =
        inherit BaseResource("https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd", "popper.min.js")
    type JS() =
        inherit BaseResource("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js", "bootstrap.min.js")

[<Require(typeof<Resources.CSS>);Require(typeof<JQuery.Resources.JQuery>);Require(typeof<Resources.PopperJS>);Require(typeof<Resources.JS>)>]
[<JavaScript>]
module Bs =
    
    let btncls = if JQuery(JS.Window).Width() <= 479 then "btn btn-sm" else "btn"
    let btn c label onclick = button [reid "btn"; cls (btncls + " " + c); on.click onclick] [text label]
    let btnPrimary label onclick = btn "btn-primary" label onclick
    let btnSecondary label onclick = btn "btn-secondary" label onclick
    let btnSuccess label onclick = btn "btn-success" label onclick
    let btnDanger label onclick = btn "btn-danger" label onclick
    let btnWarning label onclick = btn "btn-warning" label onclick
    let btnInfo label onclick = btn "btn-info" label onclick
    let btnLight label onclick = btn "btn-light" label onclick
    let btnDark label onclick = btn "btn-dark" label onclick
    
    let btnDropdown c label labels (onclicks:(Dom.Element -> Dom.MouseEvent -> unit) list) = 
        let sid  = "btndropdown" + "-" + rnd.Next().ToString()
        let id = attr.id sid 
            
        div [cls "btn-group dropright"] [
            button [id; cls (btncls + " " + c + " " + "dropdown-toggle"); attr.``type`` "button"; Attr.Create "data-toggle" "dropdown"; Attr.Create "aria-haspopup" "true"; Attr.Create "aria-expanded" "false"] [text label]
            div [cls "dropdown-menu";  Attr.Create "aria-labelledby" sid] (labels |> List.mapi(fun i l -> a [cls "dropdown-item"; href "#"; on.click onclicks.[i]] [text l]))
        ]
    let btnPrimaryDropdown label labels onclicks = btnDropdown "btn-primary" label labels onclicks
    let btnSecondaryDropdown label labels onclicks = btnDropdown "btn-secondary" label labels onclicks
    
    let input lbl extras (target, labelExtras, targetExtras) =
        div (cls "form-group" :: extras) [
            label labelExtras [text lbl]
            Doc.Input [cls "form-control"; targetExtras] target
        ]

    let inputPassword lbl extras (target, labelExtras, targetExtras) =
        div (cls "form-group" :: extras) [
            label labelExtras [text lbl]
            Doc.PasswordBox (cls "form-control" :: targetExtras) target
        ]

    let textArea lbl extras (target, labelExtras, targetExtras) =
        div (cls "form-group" :: extras) [
            label labelExtras [text lbl]
            Doc.InputArea (cls "form-control" :: targetExtras) target
        ]

    let checkbox lbl extras (target, labelExtras, targetExtras) =
        div (cls "checkbox" :: extras) [
            label labelExtras [
                Doc.CheckBox targetExtras target
                text lbl
            ]
        ]

    let radio lbl extras (target, labelExtras, targetExtras) =
        div (cls "radio" :: extras) [
            label labelExtras [
                Doc.Radio targetExtras true target
                text lbl
            ]
        ]

