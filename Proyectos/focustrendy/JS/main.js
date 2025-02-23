!function(l){"use strict";var p,e,t,s,r,d,i=l+"Box",a="cookieWarn.accepted",n=document.getElementById(l);n?(e=document.documentElement.lang||"en",e=(e=n.getAttribute("data-lang-"+e))?JSON.parse(e.replace(/'/g,'"')):{text:"Nuestro sitio usa Cookies.",accept_text:"Aceptar",more_text:"Pincha aquí para más información",more_link:"https://focustrendy.com/politicadecookies.html",reject_text:"Rechazar",reject_info:null,reject_link:null,close_text:"Close"},(e={delay:parseInt(n.getAttribute("data-delay")),expire:parseInt(n.getAttribute("data-expire")),domain:n.getAttribute("data-domain"),path:n.getAttribute("data-path"),secure:n.getAttribute("data-secure"),debug:n.getAttribute("data-debug"),style:n.getAttribute("data-style"),class:n.getAttribute("data-class"),callback:n.getAttribute("data-callback"),data:e}).path=e.path||"/",e.delay=e.delay||500,e.expire=e.expire||365,e.secure="true"==e.secure,e.debug="true"==e.debug,e.debug&&console.log(e),p=e,t=function(e,t,a,n,c,o){if(void 0===t){for(var l,s,r=document.cookie.split(";"),d=0;d<r.length;d++)if(l=r[d].substr(0,r[d].indexOf("=")),s=r[d].substr(r[d].indexOf("=")+1),(l=l.replace(/^\s+|\s+$/g,""))==e)return s}else{var i=[],u=new Date;a=a||365,u.setDate(u.getDate()+a),null!=a&&null!=a&&i.push("expires="+u.toGMTString()),null!=n&&null!=n&&i.push("path="+n),null!=c&&null!=c&&i.push("domain="+c),null!=o&&null!=o&&o&&i.push("secure"),0<i.length&&(t=t+"; "+i.join("; ")),p.debug&&console.log(e,t),document.cookie=escape(e)+"="+t}},window[l]={accept:function(){t(a,!0,p.expire,p.path,p.domain,p.secure);var e=document.getElementById(i);e.className=e.className+" closed",r(s=!0)},reject:function(){t(a,!1,p.expire,p.path,p.domain,p.secure);var e=document.getElementById(i);p.data.reject_info?e.className=e.className+" reject":e.className=e.className+" closed",r(s=!1)},close:function(){var e=document.getElementById(i);e.className=e.className+" closed"}},s=t(a),r=function(e){e="true"==e||!0===e;p.debug&&console.log("status: "+(e?"accepted":"rejected")),p.callback||(p.callback="cookieWarnCallback"),p.callback&&window[p.callback]&&(p.debug&&console.log("call: "+p.callback),window[p.callback](e))},(d=function(){var e,t,a,n,c,o=document.readyState;p.debug&&console.log("readyState: "+o),"complete"==o?s?r(s):p.data?(e=window.jQuery&&"function"==typeof $().modal,{style:["#"+i+" {transition:all 0.4s ease-in-out;position:fixed;z-index:999999;bottom:-20px;left:0;right:0;opacity:0;text-align:center;padding:10px;background-color:#212121}","#"+i+" .btn {white-space:nowrap}","#"+i+" .reject_more {padding:0px 10px;display:none;}","#"+i+".reject .reject_more {display:block;}","#"+i+".loaded {opacity:0.9;bottom:0px}","#"+i+".closed {display:none;}"],style2:["#"+i+" {font-family: Verdana;line-height:24px;color:#f1f1f1;font-size:14px;}","#"+i+" .btn {text-transform:uppercase;cursor:pointer;background-color:#f1f1f1;color:#659fda;padding:3px 14px;margin-left:10px;}","#"+i+" .btn:hover {background-color:#ffffff;color:#4d78a5;}","#"+i+" a {text-decoration:none;color:#659fda}"],type:"text/css",element:document.createElement("style"),append:function(){e||(this.style=this.style.concat(this.style2)),p.style&&(this.style=this.style.concat(p.style)),this.element.type=this.type,this.element.appendChild(document.createTextNode(this.style.join(" "))),document.head.insertBefore(this.element,document.head.childNodes[0])}}.append(),(t=document.createElement("div")).setAttribute("id",i),p.class&&t.setAttribute("class",p.class),a=p.data.more_link&&p.data.more_text?' <a target="_blank" href="'+p.data.more_link+'">'+p.data.more_text+"</a> ":"",n='<span class="btn btn-success" id="'+l+'Accept" onclick="'+l+'.accept();">'+p.data.accept_text+"</span> ",o=c="",p.data.reject_text&&(c='<span class="btn btn-warning" onclick="'+l+'.reject();">'+p.data.reject_text+"</span> ",(p.data.reject_info||p.data.reject_link)&&(o=' <span class="reject_more">',o+=p.data.reject_info+' <a target="_blank" href="'+p.data.reject_link+'">'+p.data.reject_link+"</a> ",o+=' <span class="btn btn-secondary" id="'+l+'Close" onclick="'+l+'.close();">'+p.data.close_text+"</span> ",o+=" </span> ")),t.innerHTML='<div class="text">'+p.data.text+a+n+c+o+"</div>",document.getElementsByTagName("body")[0].appendChild(t),setTimeout(function(){t.className=t.className+" loaded"},p.delay)):console.error("Empty or invalid data-lang parameters"):setTimeout(function(){d()},200)})()):console.warn(l+" element not found by id")}("cookieWarn");


function change_image(id)
{
    document.getElementById('foto_principal').innerHTML='<img src="'+id+'.jpg" alt="'+id+'" id="primera_foto" alt="'+id+'">'
}


$('#enviar_contacto').click(
    function()
    {
        Nombre= $('#Nombre').val();
        Telefono= $('#Telefono').val();
        Correo= $('#Correo').val();
        Asunto= $('#Asunto').val();
        Texto= $('#Texto').val();
        if(Nombre==""||Correo==""||Asunto==""||Texto=="")
        {
            $('#error').html("¡¡¡Debes completar los campos!!!");
        }
        else
        {
            $.ajax({
                url: 'back.php',
                type: 'POST',
                data: {Nombre,Telefono,Correo,Asunto,Texto},
                success:function()
                {
                    console.log('ya');
                    $('#success').html("¡¡¡Gracias por tu mensaje, pronto nos pondremos en contacto contigo!!!");                    
                }
            });
        }
    });

function review_paypal(aviso)
{
    $.ajax({
        url: 'aviso.php',
        type: 'POST',
        data:{aviso},
        success:function(e)
        {
            console.log(e);
            console.log('funciona?');
        }
    });
}


if($("#titulo").html()=="Xiaomi Redmi Note 10")
{
    $("#item-options").change(function(){
    
        if($("#item-options").val()=="Gris - 64GB"||$("#item-options").val()=="Gris - 128GB")
        {
            $('#foto_principal').html('<img src="1.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="1.jpg" alt="1" onclick="change_image(alt)">');
        }
        else
        {
            $('#foto_principal').html('<img src="verde.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="verde.jpg" alt="verde" onclick="change_image(alt)">');
        }
        
        });
    
        
    $("#item-options").change(function(){
    
        if($("#item-options").val()=="Verde - 128GB"||$("#item-options").val()=="Gris - 128GB")
        {
            //$('#precio_anterior').html('259,99 €');
            $("#precio").html('269,99 €');
        }
        else
        {
            //$('#precio_anterior').html('249,99 €');
            $("#precio").html('249,99 €');
        }
        
        });
}
else if($("#titulo").html()=="Xiaomi Redmi Note 9 Pro")
{
    $("#item-options").change(function(){
    
        if($("#item-options").val()=="Gris - 6GB/64GB"||$("#item-options").val()=="Gris - 6GB/128GB")
        {
            $('#foto_principal').html('<img src="1.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="1.jpg" alt="1" onclick="change_image(alt)">');
        }
        else
        {
            $('#foto_principal').html('<img src="blanco.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="blanco.jpg" alt="blanco" onclick="change_image(alt)">');
        }
        
        });
    
    $("#item-options").change(function(){
    
        if($("#item-options").val()=="Gris - 6GB/128GB"||$("#item-options").val()=="Blanco- 6GB/128GB")
        {
            $("#precio").html('259,99 €');
        }
        else
        {
            $("#precio").html('244,99 €');
        }
        
        });
}

else if($("#titulo").html()=="Xiaomi Redmi Note 10S")
{
    $("#item-options").change(function(){
    
        if($("#item-options").val()=="Gris - 6GB/64GB"||$("#item-options").val()=="Gris - 6GB/128GB")
        {
            $('#foto_principal').html('<img src="1.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="1.jpg" alt="1" onclick="change_image(alt)">');
        }
        else if($("#item-options").val()=="Blanco - 6GB/128GB")
        {
            $('#foto_principal').html('<img src="Blanco.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="Blanco.jpg" alt="blanco" onclick="change_image(alt)">');
        }
        else
        {
            $('#foto_principal').html('<img src="Azul.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="Azul.jpg" alt="Azul" onclick="change_image(alt)">');
        }
        
        });
    
    $("#item-options").change(function(){
    
        if($("#item-options").val()=="Gris - 6GB/128GB"||$("#item-options").val()=="Blanco - 6GB/128GB"||$("#item-options").val()=="Azul - 6GB/128GB")
        {
            $("#precio").html('279,99 €');
        }
        else
        {
            $("#precio").html('259,99 €');
        }
        
        });
}

else if($("#titulo").html()=="Xiaomi Mi 11 Lite 5G")
{
    $("#item-options").change(function(){
    
        if($("#item-options").val()=="Verde")
        {
            $('#foto_principal').html('<img src="1.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="1.jpg" alt="1" onclick="change_image(alt)">');
        }
        else
        {
            $('#foto_principal').html('<img src="Amarillo.jpg" alt="1" alt="1">');
            $("#primera_foto").html('<img src="Amarillo.jpg" alt="Amarillo" onclick="change_image(alt)">');
        }
        
        });
}