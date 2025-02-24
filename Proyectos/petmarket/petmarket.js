var codigo=location.search.substr().split('=')[1].split('&')[0];

var array=[];

array.push([0,'']);
array.push([1,'Affinity Advance 18 kg','ADVANCE es una gama de alimentos de alta calidad que incorpora los últimos avances en nutrición para favorecer que tu mascota goce de una excelente salud durante toda su vida. ADVANCE está especialmente formulado para ayudar a que tu perro esté en excelentes condiciones físicas, internas y externas. ADVANCE contribuye al óptimo funcionamiento de los distintos sistemas de tu perro: inmunitario, digestivo, cardiovascular, urinario. Advance incorpora en todas sus fórmulas una efectiva combinación de antioxidantes tales como vitamina C y E, bioflavonoides, selenio, zinc, cobre, manganeso y taurina','Perros','15.000']);
array.push([2,'Mindkun (gatos – 280 g)','Promueve la síntesis de serotonina, lo que favorece la sensación de calma y bienestar. <br>Activa los receptores GABA centrales, reduciendo el estrés y la ansiedad','Gatos','10.000']);
array.push([3,"Hill's Metabolic - pienso para gatos",'Pienso equilibrado para gatos obesos, ayuda a bajar de peso y a mantenerlo después de la dieta, con complejo de nutrientes científicamente desarrollado para activar la quema de grasas.','Gatos','25.000']);
array.push([4,'Crunchies snacks para higiene intestinal de perros','Snacks terapéuticos y preventivos. Son 100 % naturales y eliminan los parásitos internos que residen en los perros. Los comerá con gusto porque son ricos. Favorecen la salud del sistema digestivo.','Perros','5.000']);
array.push([5,'Felix Bocaditos en salsa para gatos','Oferta limitada: compra ahora 12 x 200 g de la comida húmeda completa para gatos adultos Felix bocaditos en salsa, en prácticas tarrinas ¡con un 15 % de descuento!','Gatos','5.000']);
array.push([6,'Purina Pro Plan Small & Medium','Pienso rico en nutrientes para cachorros de razas pequeñas y medianas y para su madre. Con calostro para favorecer las defensas, facilita el cambio a la alimentación sólida. Con delicioso pollo.','Perros','20.000']);
array.push([7,'Ratón de juguete ROLORAT para gatos','Juguete a pilas para gatos: ratón con ojos rojos, sonido y cola que se mueve, se desplaza en direcciones imprevisibles, ideal para entretenerse cuando no estés en casa.','Gatos','7.000']);
array.push([8,'Funny Butterfly Juguete Mariposa para gatos','Juguete interactivo con mariposa que aletea, a pilas, estimula al juego y la caza, base ancha para mayor estabilidad, incluye mariposas de repuesto. Mide 25 cm de diám.','Gatos','8.000']);
array.push([9,'Pato de juguete Chirping Rolling para gatos','Juguete interactivo para gatos en forma de pato, emite sonido y se balancea al tocarlo, con plumas reales en las alas, ojos saltones y pico de fieltro. Diversión duradera asegurada.','Gatos','10.000']);
array.push([10,'Alfombra de juegos Little Leo','Alfombra de juegos para gatos con estampado de leopardo, con 4 juguetes que cuelgan con catnip en su interior. Ideal para jugar y descansar. Medidas: 57 x 59 x 33 cm.','Gatos','25.000']);
array.push([11,'Catit circuito de velocidad','Este juguete interactivo para gatos cuenta con una pelota luminosa, unos raíles de montaña rusa y una velocidad alta que despierta la curiosidad y entrena la habilidad. Es extensible y combinable.','Gatos','20.000']);
array.push([12,'Pelota SlimCat para rellenar con comida para gatos','La pelota para rellenar con comida PetSafe SlimCat es perfecta contra el aburrimiento y para mantener a tu gato en forma. Puede rellenarse con todo tipo de piensos secos. Para todos los gatos.','Gatos','15.000']);
array.push([13,'Set completo de Agility Fun & Sport','4 componentes de Agility Fun & Sport ahora en un económico set. Contiene vallas, un slalom, un aro y un túnel flexible. Cree un variado programa de gimnasia para su perro.','Perros','30.000']);
array.push([14,'KONG Puppy juguete rellenable para cachorros','Juguete para la mandíbula de un cachorro y de goma blanda especial para ellos y perros que no tienen mucha fuerza en la mandíbula. Se puede rellenar con golosinas. No se puede elegir el color.','Perros','7.000']);
array.push([15,'Hueso de caucho con cuerda para perros','Juguete versátil y colorido para cachorros y perros pequeños, con cuerda anudada para que el perro tire de ella, para jugar a lanzar y traer. Superficie con relieve que estimula las encías.','Perros','8.000']);
array.push([16,'Moodles oso de peluche para perros','Simpático oso de peluche para perros, con graciosa sonrisa y sin piezas pequeñas que se puedan desprender y tragar. De suave tejido de poliéster con calidad Oeko®-Tex. Sin sonido.','Perros','10.000']);
array.push([17,'Pelota Chuckit! Ultra Ball para perros','Pelota para perros de caucho natural. Ideal para juegos de lanzar y traer, gracias sus grandes botes y a que flota. Superficie con textura y surcos en llamativos colores.','Perros','3.000']);
array.push([18,'Juguete para perros Anillo TPR','Cuida la higiene dental masajeando las encías y estimulando el riego salivar. Elaborado en goma termoplástica de color verde. Puede flotar. Es, además, resistente y duradero.','Perros','5.000']);
array.push([19,'Nutro Adult Pollo y arroz para perros medianos','Pienso de alta calidad para perros adultos de razas medianas, nutritivo y fácil de digerir, con pollo fresco y arroz. No contiene trigo, maíz, soja, huevos, aditivos artificiales ni transgénicos.','Perros','40.000']);
array.push([20,'Greenwoods Vacuno con lentejas, patatas y zanahorias','Pienso para perros sin cereales con carne fresca de vacuno como ingrediente principal y único tipo de carne. Combinada con lentejas, patatas y zanahorias. Una experiencia única.','Perros','30.000']);
array.push([21,'Chewies huesitos semi-húmedos para perros','Sabrosos y jugosos huesitos para educar y premiar a tu perro. Ahora en diferentes y deliciosos sabores sin azúcar.','Perros','3.000']);
array.push([22,'Cama Branca Two in One para mascotas','Esta maravillosa cama redonda se transforma en una cesta cómoda para dormir. Es espaciosa, suave y blandita, reversible y lavable a máquina a máx. 30 ºC. Color: beige con huellitas impresas.','Gatos','13.000']);
array.push([23,'Caseta de madera Spike Special para perros','De madera maciza tratada con aceite. Techo a dos aguas, recubierto de tela asfáltica, patas regulables y terraza cerrada. Fácil de montar. Varios tamaños.','Perros','75.000']);
array.push([24,'Casita Bora Bora para gatos','Casa para gatos para descansar, jugar y rascar, de madera robusta, con una gran plataforma, 2 esterillas de sisal, 1 poste rascador y 1 pelota, cueva espaciosa y hamaca extraíble. Color: natural/gris.','Gatos','53.000']);
array.push([25,'Royal Canin Puppy Mini','Royal Canin Mini Junior es un pienso para cachorros de 1 a 10 kg y de 2 a 10 meses. Crecimiento sano, defensas fuertes y seguridad digestiva. Con alto contenido de energía y nutrientes esenciales.','Perros','12.000']);
array.push([26,'Whiskas 1+ años en latas 24 x 400 g - Pack Ahorro','Deliciosa comida húmeda completa para gatos adultos, con carne fresca, sin colorantes ni aromatizantes, sin azúcar añadido, disponible en distintas variedades. ¡Ahorra comprando más unidades!','Gatos','23.000']);
array.push([27,'Applaws en caldo 6 x 70 g latas para gatos','Comida húmeda en caldo para gatos, disponible en diferentes sabores y latas prácticas, 100 % natural, sin conservantes artificiales, colorantes ni aromas.','Gatos','6.000']);



if(document.getElementById('valor').value==0)
{
    document.getElementById('imagen_producto').innerHTML='<img src="Productos/'+codigo+'.png" alt="1">';
    document.getElementById('Titulo_producto').innerHTML=array[codigo][1];
    document.getElementById('Ficha_producto').innerHTML=array[codigo][2];
    document.getElementById('para').innerHTML=array[codigo][3];
    document.getElementById('precio').innerHTML=array[codigo][4];
}
else
{
    document.getElementById('imagen_comprar').innerHTML='<img src="Productos/'+codigo+'.png" alt="1">';
    document.getElementById('titulo_comprar').innerHTML=array[codigo][1];
    document.getElementById('precio_comprar').innerHTML=array[codigo][4];
}


function comprar()
{
    location="comprar.html?c="+codigo;
}

function pagar()
{
    alert('Gracias por comprar con nosotros. \n Le hemos enviado toda la información a su correo electrónico.');
}

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

document.addEventListener("click", (event) => {
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        navMenu.classList.remove("active");
    }
});