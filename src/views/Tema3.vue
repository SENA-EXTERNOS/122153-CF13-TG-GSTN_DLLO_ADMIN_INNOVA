<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Valoración y transferencias documentales
    .row.mb-5
      .col-lg-5.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i1.png')
      .col-lg-7.col-12
        p Dando continuidad al proceso de gestión documental, esta realiza la selección de documentos que van a ser dados de baja y los que se transferirán a los archivos históricos. Este método es una alternativa en los procesos de la organización, porque garantiza contar con una información veraz, en óptimas condiciones y disponible en cualquier momento, reduciendo costos y facilitando las labores cotidianas en el transcurso de las actividades diarias.
    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Tablas de transferencia documental

    p Son documentos construidos a partir de las funciones y de la estructura orgánica de cada entidad; en las colectividades públicas, estas deben ser expuestas en sus sitios oficiales, son diseñadas a partir de las funciones de cada dependencia y relacionan los diferentes trámites que adelanta cada una de ellas.
    p.mb-5 El artículo 24 de la Ley General de Archivo dice:&nbsp;
      strong Obligatoriedad de las tablas de retención.&nbsp;
      | Será obligatorio para las entidades del Estado, elaborar y adoptar las respectivas tablas de retención documental.

    .row.mb-5
      .col-lg-6.col-12
        a.anexo.mb-4.mb-lg-0(
          href='https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=6351#1',
          target='_blank'
        )
          .anexo__icono
            img(src='@/assets/template/icono-link.svg')
          .anexo__texto
            |
            strong Enlace web.
            | Para ampliar la información, lo invitamos a revisar el&nbsp;
            strong Acuerdo 39 de 2022 Archivo General de la Nación.
      .col-lg-6.col-12
        a.anexo.mb-4.mb-lg-0(
          href='https://mgd.archivogeneral.gov.co/',
          target='_blank'
        )
          .anexo__icono
            img(src='@/assets/template/icono-link.svg')
          .anexo__texto
            |
            strong Enlace web.
            | Puede visualizar una tabla de retención documental, empleada por una dependencia, con la finalidad de evaluar sus procesos documentales en&nbsp;
            strong Modelo de Gestión Documental y Administración de Archivos MGDA. 

    p.mb-5 Al finalizar su ciclo de vida y cuando ya los documentos digitales no tienen un significado de valor para la organización, se debe iniciar un proceso de eliminación documental; esta ha sido cobijada por la Ley 594 de 2000 o Ley General de Archivo y se debe seguir el procedimiento establecido en el  Acuerdo 04 de 2013:

    .row.justify-content-center
      .col-lg-11.col-12
        .bloque-texto-f.bg-06.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-center.bloque-texto-f__texto Eliminación de Documentos. La eliminación de documentos de archivo, tanto físicos como electrónicos, deberá estar basada en las tablas de retención documental o en las tablas de valoración documental, y deberá ser aprobada por el correspondiente Comité Institucional de Desarrollo Administrativo o el Comité Interno de Archivo, según el caso. Se podrá elevar consulta al Archivo General de la Nación, cuando no existan normas legales que regulen los plazos de retención de ciertos documentos; a su vez, este podrá solicitar concepto al organismo cabeza del sector a que corresponda la documentación objeto de consulta.
          strong.text-center.mb-3 - Artículo 15 del Acuerdo 04 de 2013 
          .bloque-texto-f__avatar.mb-3
            .bloque-texto-f__avatar__img
              img(src='@/assets/template/tema03/t3-i2.svg', alt='Texto que describa la imagen')

    p.mb-5 A continuación, se detalla el procedimiento:

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11.col-12
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            .col-md-5
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/t3-i3.png',
                  alt='Texto que describa la imagen'
                )
            .col-md-7.mb-md-0
              p De manera previa y por un periodo no inferior a 30 días, la entidad deberá publicar el listado de los documentos que han cumplido el tiempo de retención y que ya pueden ser eliminados, con la finalidad que los usuarios puedan enviar sus observaciones a consejos departamentales y distritales.

          .row
            .col-md-7.mb-md-0
              p.text-start Los consejos departamentales y distritales de archivo tendrán un lapso de 60 días para revisar en caso de observaciones, en donde se tomará la decisión de si deben permanecer por otro tiempo, o se suspende el proceso de eliminación, permaneciendo en las respectivas páginas web de la entidad.
            .col-md-5
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/t3-i4.png',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-5
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/t3-i5.png',
                  alt='Texto que describa la imagen'
                )    
            .col-md-7.mb-md-0
              p En caso de ser aprobada la eliminación de documentos físicos o electrónicos, se dejará constancia en un acta de eliminación de documentos.

          .row
            .col-md-7.mb-md-0
              p.text-start Las actas de eliminación y el inventario de los documentos eliminados, deberán conservarse para su posterior consulta.
            .col-md-5
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/t3-i6.png',
                  alt='Texto que describa la imagen'
                )    

          .row
            .col-md-5
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/t3-i7.png',
                  alt='Texto que describa la imagen'
                )    
            .col-md-7.mb-md-0
              p El Archivo General de la Nación será la última instancia, en cuanto a solicitudes de suspensión de procesos de eliminación.
    .row.mb-5
      .col-lg-3.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i8.svg')
      .col-lg-9.col-12
        p Para decidir la disposición final de los registros, es importante determinar cuáles documentos serán útiles en el futuro, para reconstruir la vida institucional de la entidad como fuente para fines históricos o científicos, porque son de valor intermedio o secundario. Es una decisión que resulta de una evaluación realizada en cualquier etapa del ciclo del documento, certificada en fichas de registro y revisión para su total conservación, extracción y selección de estas.

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Transferencias documentales 

    .row.mb-5
      .col-lg-6.col-12
        .row 
          .col-12
            p Cuando la organización requiere de un proceso de actualización de sus herramientas ofimáticas, servidores, dispositivos de almacenamiento, entre otros, es necesario hacer una migración de la información documental; este proceso requiere atención para evitar pérdidas y reprocesos, se emplean instrumentos específicos para tal finalidad y cada organización puede obtener su respectivo proceso personalizado para sus necesidades. 
          .col-12
            .cajon.cajon-color-1.p-4
                p Puede definirse como el proceso necesario para realizar la migración o transferencia de datos de un sistema de almacenamiento a otro, o de un&nbsp;
                 i software a otro. 
                p Se debe generar un documento en el que se refleje la gestión realizada, cómo se llevó a cabo la planeación, qué aspectos y riesgos se evaluaron, cómo se puede tener la menor pérdida posible de información digital y un plan de contingencia, en caso de ser requerido.
        
      .col-lg-6.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i14.png')

    p.mb-5 La transferencia de documentos es importante por las siguientes razones: 

    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/template/tema03/t3-i9.png', alt='Texto que describa la imagen')

          p.text-small.text-center.color-black Asegura que los ciudadanos tengan acceso a la información. 

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/template/tema03/t3-i10.png', alt='Texto que describa la imagen')

          p.text-small.text-center.color-black Evita la creación y acumulación de documentos irrazonables.    

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/template/tema03/t3-i11.png', alt='Texto que describa la imagen')

          p.text-small.text-center.color-black Asegura y facilita la gestión eficaz y adecuada de los documentos.   

    p.mb-5 Realizar una transferencia de datos de manera correcta, requiere considerar las siguientes etapas:

    .row.justify-content-center
      .col-lg-5.mb-5
        ImagenInfografica.color-acento-botones.punto_caliente_acento_botones(
          data-aos='zoom-in'
        )
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema03/t3-i12.svg')

          .tarjeta.color-acento-botones_1.p-3(
            x='22.6%',
            y='31.8%',
            numero='+'
          )
            p.mb-0 Revisión de las estrategias, medios tecnológicos, viabilidad, margen de posible error que permita estudiar el proceso necesario para hacer la transferencia de la información digital.     
          .tarjeta.color-acento-botones_1.p-3(
            x='75.7%',
            y='31.8%',
            numero='+'
          )
            p.mb-0 Realizar ciclos de pruebas a las aplicaciones y herramientas ofimáticas empleadas para la transferencia.     
          .tarjeta.color-acento-botones_1.p-3(
            x='23%',
            y='79.2%',
            numero='+'
          )
            p.mb-0 En esta etapa se miden los resultados obtenidos y el impacto evidenciado, entre otros factores que permitan encontrar posibles hallazgos y mejoras al siguiente proceso de transferencia digital.    
          .tarjeta.color-acento-botones_1.p-3(
            x='75.7%',
            y='80.1%',
            numero='+'
          )
            p.mb-0 Comprende las etapas de extracción de información, transformación y carga.  

    .row.justify-content-center.mb-5
      .col-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i13.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            p Y finalizamos este tema con el formato de control, el cual es una herramienta o instrumento destinado para hacer cumplir los procesos y prácticas de la creación, la revisión, la modificación, la publicación, la distribución y la accesibilidad de documentos que son procesos que hacen parte de la gestión; entre los formatos se encuentran los manuales, los procedimientos y los programas.
            br
            br
            p La hoja o formato de control se diligencia durante la etapa activa del expediente y como un requisito obligatorio de transferencia al archivo central.              

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
