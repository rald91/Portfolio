// Translations object
const translations = {
    pt: {
        'header.subtitle': 'Estudante de Engenharia Informática',
        'nav.about': 'Sobre Mim',
        'nav.journey': 'Percurso',
        'nav.personal': 'Pessoal',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contactos',
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou licenciada e mestre em Ciências Farmacêuticas, atualmente a desenvolver um novo percurso na área das tecnologias de informação.',
        'about.p2': 'Tenho interesse na interligação entre ciência, lógica e tecnologia, especialmente em gestão de bases de dados e data science.',
        'about.p3': 'Este portfólio reflete a minha trajetória académica e profissional, bem como os meus interesses pessoais e projetos na área da programação.',
        'journey.academic.title': 'Percurso Académico',
        'journey.academic.degree1.title': 'Licenciatura em Engenharia Informática - (2022 até ao momento)',
        'journey.academic.degree1.location': 'Instituto Politécnico de Beja',
        'journey.academic.degree1.description': 'Experiência em linguagens de programação, estruturas de dados e aplicações práticas de engenharia informática.',
        'journey.academic.degree2.title': 'Licenciatura e Mestrado em Ciências Farmacêuticas (2012 a 2017)',
        'journey.academic.degree2.location': 'Faculdade de Farmácia da Universidade de Lisboa',
        'journey.academic.degree2.description': 'Experiência em laboratório, análise de dados farmacêuticos e desenvolvimento de projetos científicos.',
        'journey.professional.title': 'Percurso Profissional',
        'journey.professional.job1.title': 'Farmácia Ronil (2018 a 2021)',
        'journey.professional.job1.p1': 'Atendimento ao público, aconselhamento farmacêutico, aprovisionamento e gestão de encomendas.',
        'journey.professional.job1.p2': 'Realização de medição de parâmetros bioquímicos (glicémia, colesterol) e monitorização de parâmetros vitais (tensão arterial, IMC).',
        'journey.professional.job2.title': 'Hospital de Beja - Estágio (2017)',
        'journey.professional.job2.description': 'Estágio nos Serviços Farmacêuticos Hospitalares, com contacto com procedimentos de preparação e dispensa de medicamentos em meio hospitalar.',
        'journey.professional.job3.title': 'Farmácia J. Delgado - Estágio (2017)',
        'journey.professional.job3.description': 'Estágio em farmácia comunitária, com foco em atendimento ao público e gestão de stocks.',
        'journey.professional.job4.title': 'Farmácia Holon — Estágio (2015)',
        'journey.professional.job4.description': 'Estágio em farmácia comunitária, incluindo aconselhamento farmacêutico e apoio em campanhas de sensibilização dirigidas à população.',
        'personal.title': 'Lado Pessoal',
        'personal.hobbies.title': 'Hobbies',
        'personal.hobbies.description': 'Nos meus tempos livres gosto de actividades criativas e relaxantes, como <strong>scrapbooking</strong>, <strong>ler</strong>, <strong>resolver puzzles</strong> e <strong>pintar</strong>. Estas actividades ajudam-me a manter o foco, a paciência e a criatividade.',
        'personal.interests.title': 'Interesses',
        'personal.interests.description': 'Interesso-me por temas relacionados com a <strong>saúde e o bem-estar</strong>, bem como por <strong>arte</strong>, <strong>decoração de interiores</strong> e <strong>viagens</strong>. Gosto especialmente de visitar <strong>museus</strong> e apreciar <strong>arquitectura</strong>, pois encontro aí inspiração e novas perspetivas.',
        'personal.skills.title': 'Soft Skills',
        'personal.skills.description': 'Considero-me uma pessoa <strong>curiosa</strong>, <strong>organizada</strong> e com <strong>atenção ao detalhe</strong>. Tenho facilidade em <strong>trabalhar em equipa</strong> e valorizo a <strong>comunicação clara</strong>. Sou também adaptável e gosto de aprender continuamente, procurando melhorar a cada novo desafio.',
        'projects.title': 'Projetos Destacados',
        'projects.project1.title': 'Algoritmo Heurístico para o Caminho de Custo Mínimo',
        'projects.project1.description': 'Implementação em MATLAB de uma variação do algoritmo de Dijkstra para determinar o trajeto de menor custo em grafos, com análise empírica de desempenho e eficiência computacional.',
        'projects.project2.title': 'BookTalk – Biblioteca Escolar Digital',
        'projects.project2.description': 'Aplicação web desenvolvida em Angular para gestão digital de bibliotecas escolares, reservas, reviews, moderação e integração da API do Google Books.',
        'projects.project3.title': 'Cálculo do Índice APGAR - Protótipo Funcional',
        'projects.project3.description': 'Desenvolvimento de uma aplicação móvel em Kotlin para calcular o Índice de APGAR em recém-nascidos, incluindo formulário interativo e calculadora automática dos resultados aos 0, 5 e 10 minutos.',
        'projects.project4.title': 'Projeto Airbnb – Engenharia de Software',
        'projects.project4.description': 'Simulação do desenvolvimento de um sistema de reservas inspirado no Airbnb, aplicando a metodologia ágil Scrum e modelação UML (casos de uso, classes, sequência e estados) para as fases de análise e desenho do software.',
        'contact.title': 'Contactos'
    },
    en: {
        'header.subtitle': 'Computer Science Student',
        'nav.about': 'About Me',
        'nav.journey': 'Journey',
        'nav.personal': 'Personal',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'about.title': 'About Me',
        'about.p1': 'I hold a Bachelor\'s and Master\'s degree in Pharmaceutical Sciences, currently developing a new career path in information technology.',
        'about.p2': 'I am interested in the interconnection between science, logic, and technology, especially in database management and data science.',
        'about.p3': 'This portfolio reflects my academic and professional journey, as well as my personal interests and programming projects.',
        'journey.academic.title': 'Academic Journey',
        'journey.academic.degree1.title': 'Bachelor\'s in Computer Engineering - (2022 to present)',
        'journey.academic.degree1.location': 'Instituto Politécnico de Beja',
        'journey.academic.degree1.description': 'Experience in programming languages, data structures, and practical computer engineering applications.',
        'journey.academic.degree2.title': 'Bachelor\'s and Master\'s in Pharmaceutical Sciences (2012 to 2017)',
        'journey.academic.degree2.location': 'Faculty of Pharmacy, University of Lisbon',
        'journey.academic.degree2.description': 'Experience in laboratory work, pharmaceutical data analysis, and scientific project development.',
        'journey.professional.title': 'Professional Journey',
        'journey.professional.job1.title': 'Farmácia Ronil (2018 to 2021)',
        'journey.professional.job1.p1': 'Public service, pharmaceutical counseling, supply and order management.',
        'journey.professional.job1.p2': 'Performed biochemical parameter measurements (glycemia, cholesterol) and vital parameter monitoring (blood pressure, BMI).',
        'journey.professional.job2.title': 'Hospital de Beja - Internship (2017)',
        'journey.professional.job2.description': 'Internship in Hospital Pharmaceutical Services, with exposure to medication preparation and dispensing procedures in a hospital setting.',
        'journey.professional.job3.title': 'Farmácia J. Delgado - Internship (2017)',
        'journey.professional.job3.description': 'Internship in community pharmacy, focusing on public service and stock management.',
        'journey.professional.job4.title': 'Farmácia Holon — Internship (2015)',
        'journey.professional.job4.description': 'Internship in community pharmacy, including pharmaceutical counseling and support in public awareness campaigns.',
        'personal.title': 'Personal Side',
        'personal.hobbies.title': 'Hobbies',
        'personal.hobbies.description': 'In my free time, I enjoy creative and relaxing activities, such as <strong>scrapbooking</strong>, <strong>reading</strong>, <strong>solving puzzles</strong>, and <strong>painting</strong>. These activities help me maintain focus, patience, and creativity.',
        'personal.interests.title': 'Interests',
        'personal.interests.description': 'I am interested in topics related to <strong>health and wellness</strong>, as well as <strong>art</strong>, <strong>interior decoration</strong>, and <strong>travel</strong>. I especially enjoy visiting <strong>museums</strong> and appreciating <strong>architecture</strong>, as I find inspiration and new perspectives there.',
        'personal.skills.title': 'Soft Skills',
        'personal.skills.description': 'I consider myself a <strong>curious</strong>, <strong>organized</strong> person with <strong>attention to detail</strong>. I have ease in <strong>working in teams</strong> and value <strong>clear communication</strong>. I am also adaptable and enjoy continuous learning, seeking to improve with each new challenge.',
        'projects.title': 'Featured Projects',
        'projects.project1.title': 'Heuristic Algorithm for Minimum Cost Path',
        'projects.project1.description': 'MATLAB implementation of a variation of Dijkstra\'s algorithm to determine the lowest cost path in graphs, with empirical performance and computational efficiency analysis.',
        'projects.project2.title': 'BookTalk – Digital School Library',
        'projects.project2.description': 'Web application developed in Angular for digital management of school libraries, reservations, reviews, moderation, and Google Books API integration.',
        'projects.project3.title': 'APGAR Index Calculation - Functional Prototype',
        'projects.project3.description': 'Development of a Kotlin mobile application to calculate the APGAR Index in newborns, including an interactive form and automatic calculator for results at 0, 5, and 10 minutes.',
        'projects.project4.title': 'Airbnb Project – Software Engineering',
        'projects.project4.description': 'Simulation of the development of a reservation system inspired by Airbnb, applying the agile Scrum methodology and UML modeling (use cases, classes, sequence, and states) for software analysis and design phases.',
        'contact.title': 'Contact'
    }
};

// Function to switch language
function switchLanguage(lang) {
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update language switcher active state
    document.querySelectorAll('.lang-link').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('lang-' + lang).classList.add('active');

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-PT' : 'en');

    // Update page title
    document.title = lang === 'pt' ? 'Rita Dias - Portfolio' : 'Rita Dias - Portfolio';
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    switchLanguage(savedLang);
});

// Original showTab function
function showTab(e, tabName) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    e.target.classList.add('active');
}

