export default {
  global: {
    componenteFormativo: 'Archivos y valoración documental',
    descripcionCurso:
      'La correcta gestión documental, apoyada en las tecnologías de la información, ha significado un reto para las diferentes organizaciones, generando cambios en sus procesos documentales, persiguiendo la mayor eficacia, rapidez y transparencia en la consulta, gestión y conservación documental digital, en donde la gestión documental tiene sus propias características, reglamentación y normativa a cumplir por parte de las entidades públicas o privadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Las nuevas tecnologías y su aplicación a la gestión documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Soportes electrónicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Las redes: el correo electrónico, la intranet y el internet',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El soporte informático como medio documental ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Valoración y transferencias documentales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Preservación de documentos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normativa de seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Valoración y transferencias documentale',
      referencia:
        'Didáctica Empresarial. (2020). <em>Transferencias documentales</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CrDWSXqcP98',
    },
    {
      tema: 'Valoración y transferencias documentales ',
      referencia:
        'Archivistas Colombia. (2020). <em>Generalidades de la Valoración Documental <e/m>(video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=baLt9Xz-FCk',
    },
    {
      tema: 'Valoración y transferencias documentales',
      referencia:
        'El Mundo de la Gestión Documental. (2015). <em>Transferencia documental</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yuBO1OAH9L4',
    },
    {
      tema: 'Preservación de documentos digitales',
      referencia:
        'CanalAGNColombia. (2018). <em>Cápsula animada del Plan de Preservación de largo Plazo – PPDL</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=avy2qDB3CDs',
    },
  ],
  glosario: [
    {
      termino: 'Acta de eliminación',
      significado:
        'es la relación de los documentos seleccionados para ser eliminados.',
    },
    {
      termino: 'Ciclo de vida de los documentos',
      significado:
        'es el proceso de los documentos desde su elaboración hasta su eliminación.',
    },
    {
      termino: 'Extracción de documentos',
      significado:
        'obtención de información automática desde un dispositivo móvil. ',
    },
    {
      termino: 'Gestión documental',
      significado:
        'es la parte del sistema de información de una empresa diseñada para almacenar y recuperar documentos.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'generalmente es todo lo físico. Es la parte tangible de un ordenador o sistema informático. Está formado por componentes eléctricos, electrónicos, electromecánicos y mecánicos.',
    },
    {
      termino: 'Preservación',
      significado:
        'amparar o defender algo con anticipación, con el objetivo de evitar un eventual perjuicio o deterioro.',
    },
    {
      termino: 'Sistemas informáticos',
      significado:
        'es un sistema que permite almacenar y procesar información; es el conjunto de partes interrelacionadas: <em>hardware, software</em> y personal informático.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático. El <em>software</em> no siempre es visible a diferencia del <em>hardware</em>.',
    },
    {
      termino: 'Técnicas',
      significado:
        'definen la manera en que un conjunto de procedimientos, materiales o intelectuales es aplicado en una tarea específica, con base en el conocimiento de una ciencia o arte, para obtener un resultado determinado.',
    },
    {
      termino: 'Testeo',
      significado: 'autoevaluación para verificar la funcionalidad de algo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación Colombia. (2018).  <em>Fundamentos de preservación digital a largo plazo.</em>',
      link:
        'https://observatorioagn.archivogeneral.gov.co/wp-content/uploads/Documentacion/documentos_tecnicos/FundamentosPreservacionLargoPlazo.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación Colombia. (2021).  <em> Guía para la Elaboración e Implementación del Plan de Preservación Digital.</em>',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/2022/GuiaPlanPreservacionDigital.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación Colombia. (s.f.).  <em> Trámite para hacer eliminación de documentos [Comunicado de prensa]. </em>',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/conceptostecnicos/2015/SUBGPD/Radicado_2-2015-04655.pdf#:~:text=La%20eliminaci%C3%B3n%20de%20documentos%20de,de%20Archivo%20seg%C3%BAn%20el%20caso',
    },
    {
      referencia:
        'Departamento Administrativo de Función Pública. (2015).  <em> Guía para la organización de archivos de gestión y transferencias documentales </em>',
      link:
        'https://www.funcionpublica.gov.co/documents/418537/506991/2.+Guia+para+la+Organizaci%25C3%25B3n+de+los+Archivos+de+Gesti%25C3%25B3n+y+Transferencias+documentales+V3.pdf/040e3005-c101-4ae4-be58-97e56c10bd49',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
