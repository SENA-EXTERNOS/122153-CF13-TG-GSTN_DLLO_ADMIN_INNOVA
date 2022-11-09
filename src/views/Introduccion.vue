<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-12.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/introduccion/t0-i1.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se estudiará y asimilará la necesidad del correcto manejo documental en la organización, permitiendo el fácil acceso por parte de los usuarios, y donde preservar y conservar la información es algo trascendental, al igual que el cumplimiento normativo en el contexto nacional, para su proceso y aplicación. Así mismo, se desarrollará la ampliación de conceptos como soportes electrónicos, técnicas e instrumentos de valoración y conservación digital; al mismo tiempo, se estudiará la normativa de seguridad y salud en el trabajo, como medida necesaria en la manipulación de dicha información.
      .col-12.mb-5
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-12.mb-5
        figure
          .video
            iframe(
              width='560',
              height='315',
              src='https://www.youtube.com/embed/2L91WMqw96A',
              title='YouTube video player',
              frameborder='0',
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowfullscreen
            )
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
