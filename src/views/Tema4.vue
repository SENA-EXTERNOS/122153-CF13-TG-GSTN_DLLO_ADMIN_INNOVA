<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Preservación de documentos digitales
    .row.mb-5
      .col-lg-7.col-12
        p Teniendo presente lo visto a lo largo del componente formativo, reconocemos la importancia que las organizaciones cuenten con una información en la que primen las características propias aún con el pasar del tiempo y se pueda apreciar su autenticidad y originalidad; para asegurar que esto se cumpla, las organizaciones deben velar por conservar su documentación.
      .col-lg-5.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema04/t4-i1.png')

    .row.mb-5
      .col-lg-12.col-md-10.col-12
        .row
          .col-lg-4
            figure(data-aos='zoom-in')
              img.img400.m-auto(
                src='@/assets/template/tema04/t4-i2.png',
                alt='alt'
              )
          .col-lg-8
            p La preservación digital se puede clasificar de tres formas:
            AcordionA.mb-5(tipo='a', clase-tarjeta='tarjeta acordeonA')
              .row(titulo='Duración corta')
                .col-12
                  p.mb-0 Garantiza el acceso a la información, durante un tiempo determinado.

              .row(titulo='Duración media')
                .col-12
                  p.mb-0 Garantiza que se pueda acceder a la información digital, incluso después de cambios tecnológicos o en periodos más largos.

              .row(titulo='Duración larga')
                .col-12
                  p.mb-0 Está diseñada para garantizar un acceso ilimitado al contenido.

    p Para llevar a cabo el proceso de digitalización de documentos, existen leyes, normas técnicas y estándares que se deben cumplir. 
    p.mb-5 Algunas a considerar son: 

    .row.mb-5
      .col-lg-12.col-md-10.col-12
        .row
          .col-lg-8
            AcordionA.mb-5(tipo='a', clase-tarjeta='tarjeta acordeonA')
              .row(titulo='Normativa legal')
                .col-12
                  ul
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | Decreto 2620 de 1993. En particular, prescribe procedimientos para el uso de los medios técnicos apropiados para llevar los archivos de los comerciantes, teniendo en cuenta lo dispuesto en el artículo 8 del Código de Comercio.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | Salvo lo dispuesto en normas especiales, los documentos se deben conservar y pueden destruirse después de 20 años contados desde el cierre de aquellos o la fecha del último asiento, documento o comprobante. No obstante, cuando se garantice su reproducción por cualquier medio técnico pueden destruirse transcurridos 10 años. 
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | Decreto 2150 de 1995. Suprime autenticación de documentos originales y el uso de sellos; prohíbe exigir copias o fotocopias de documentos que la entidad tenga en su poder; prohíbe copiar o retirar documentos de los archivos de las entidades públicas; autoriza el uso de sistemas electrónicos de archivos y transmisión de datos. 
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | Ley 594 de 2000. Ley General de Archivos.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | Decreto 2573 de 2014. Lineamientos generales de la Estrategia de Gobierno en línea.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | Ley 1712 de 2014. Ley de Transparencia y derecho de acceso a la información pública.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | Ley 527 de 1999. Ley sobre mensajes de datos, comercio electrónico y firmas digitales.            
              .row(titulo='Normas técnicas y estándares')
                .col-12
                  ul
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | NTC ISO 19005. Archivar documentos electrónicamente de manera que se asegure la preservación de su contenido extenso periodo de tiempo.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | NTC ISO 30301. Información y documentación, Sistemas de gestión de registros.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | NTC ISO 23081. Información y documentación. Procesos de gestión de documentos. Metadatos para la gestión de documentos.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      | NTC ISO/IEC 27001. Tecnologías de la información. Técnicas de seguridad.
          .col-lg-4
            figure(data-aos='zoom-in')
              img.img400.m-auto(
                src='@/assets/template/tema04/t4-i3.png',
                alt='alt'
              )
    p Los documentos pueden presentar deterioros debido a factores que afectan el buen uso y acceso a la información. 
    p.mb-5 Conozcamos cada uno de estos factores:

    .row.mb-5
      .col-lg-3
        figure(data-aos='zoom-in')
          img(
            src='@/assets/template/tema04/t4-i4.png',
            alt='Texto que describa la imagen'
          ) 
      .col-lg-9
        TabsA.color-acento-contenido.fz-13
          .tarjeta.bg-03.p-4(titulo='Factores intrínsecos')
            p Corresponden a los materiales que componen el bien cultural, la tecnología de fabricación y el método constructivo para implementarlo. 

          .tarjeta.bg-03.p-4(titulo='Factores extrínsecos')
            p Se refiere a todos los agentes que provienen de fuentes externas al objeto y no dependen de los bienes culturales. Se clasifican en:

            br
            ul
              li 
                i.fas.fa-check.color-icon-check
                |
                | Ambientales.
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Antropogénicos.               
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Biológicos.               
              br
              li 
                i.fas.fa-check.color-icon-check
                |
                | Catastróficos.
                
                .row.mb-5

    .row.justify-content-center
      .col-12.col-lg-10
        .cajon.cajon-color-1.p-4
            p.mb-0 Una vez conocida la estructura física de los materiales que afectan a nuestros materiales, es importante evaluar el ambiente en el que se encuentran, protección, temperatura, humedad, ventilación, luz, etc.                             
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
