<script>
	import Header from '../components/Header.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import Separator from '../components/Separator.svelte';
	import SkillContainer from '../components/SkillContainer.svelte';
	import { projects } from '../projects.js';
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Footer from '../components/Footer.svelte';

	let skillIconSize = '100px';
	let showMoreProject = false;
	let previousWidth = 0;

	let initialHeight = 0;

	const adjustSkillIconSize = () => {
		skillIconSize = window.innerWidth > 950 ? '100px' : '75px';

		if (window.innerWidth > 950) {
			showMoreProject = true;
		}

		if (window.innerWidth <= 950 && previousWidth > 950) {
			showMoreProject = false;
		}

		previousWidth = window.innerWidth;
	};

	const switchShowMoreProjects = () => {
		if (showMoreProject) {
			let heightDiff =
				Math.max(
					document.body.scrollHeight,
					document.documentElement.scrollHeight,
					document.body.offsetHeight,
					document.documentElement.offsetHeight,
					document.body.clientHeight,
					document.documentElement.clientHeight
				) - initialHeight;

			window.scrollBy({
				top: -heightDiff,
				left: 0
			});
		} else {
			initialHeight = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight
			);
		}

		showMoreProject = !showMoreProject;
	};

	const links = [
		{ title: 'Accueil', id: '/', href: '/', type: 'scroll', aria: 'Accueil' },
		{
			title: 'Presentation',
			id: '/presentation',
			href: '#presentation',
			type: 'scroll',
			aria: 'Presentation'
		},
		{
			title: 'Web',
			id: '/web-skills',
			href: '#web-skills',
			type: 'scroll',
			aria: 'Compétences Web'
		},
		{
			title: 'Software',
			id: '/software-skills',
			href: '#software-skills',
			type: 'scroll',
			aria: 'Compétences Software'
		},
		{
			title: 'Jeux',
			id: '/game-skills',
			href: '#game-skills',
			type: 'scroll',
			aria: 'Compétences Jeux'
		},
		{ title: 'Projets', id: '/projects', href: '#projects', type: 'scroll', aria: 'Projets' },
		{ title: 'Parcours', id: '/experience', href: '#experience', type: 'scroll', aria: 'Parcours' }
	];

	const footerLinks = [
		{ title: 'Accueil', id: '/', href: '/', aria: 'Accueil', type: 'scroll' },
		{
			title: 'Presentation',
			id: '/presentation',
			href: '#presentation',
			aria: 'Presentation',
			type: 'scroll'
		},
		{
			title: 'Web',
			id: '/web-skills',
			href: '#web-skills',
			aria: 'Compétences Web',
			type: 'scroll'
		},
		{
			title: 'Software',
			id: '/software-skills',
			href: '#software-skills',
			aria: 'Compétences Software',
			type: 'scroll'
		},
		{
			title: 'Jeux',
			id: '/game-skills',
			href: '#game-skills',
			aria: 'Compétences Jeux',
			type: 'scroll'
		},
		{ title: 'Projets', id: '/projects', href: '#projects', aria: 'Projets', type: 'scroll' },
		{ title: 'Parcours', id: '/experience', href: '#experience', aria: 'Parcours', type: 'scroll' }
	];

	onMount(() => {
		document.title = 'Luc Arnould - Développeur';

		AOS.init({ offset: 60 });

		adjustSkillIconSize();
		window.addEventListener('resize', adjustSkillIconSize);

		return () => {
			window.removeEventListener('resize', adjustSkillIconSize);
		};
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Luc Arnould - Développeur</title>
	<meta name="title" content="Luc Arnould - Développeur" />
	<meta
		name="description"
		content="Luc Arnould. Développeur Gameplay, Logiciel et Fullstack. Passionné d'informatique et de développement, je vous présente mon portfolio."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.lucarnould.fr/" />
	<meta property="og:title" content="Luc Arnould - Développeur" />
	<meta
		property="og:description"
		content="Luc Arnould. Développeur Gameplay, Logiciel et Fullstack. Passionné d'informatique et de développement, je vous présente mon portfolio."
	/>
	<meta property="og:image" content="https://www.lucarnould.fr/Mwa.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.lucarnould.fr/" />
	<meta property="twitter:title" content="Luc Arnould - Développeur" />
	<meta
		property="twitter:description"
		content="Luc Arnould. Développeur Gameplay, Logiciel et Fullstack. Passionné d'informatique et de développement, je vous présente mon portfolio."
	/>
	<meta property="twitter:image" content="https://www.lucarnould.fr/Mwa.webp" />
</svelte:head>

<Header {links} mainButtonType="scroll" />
<main>
	<div class="main-container">
		<article class="landing-article deep-1">
			<div data-aos="fade-right" class="photo-container">
				<img src="Mwa.webp" alt="Luc Arnould" title="Moi" />
			</div>
			<div data-aos="fade-left" data-aos-delay="100" class="description-container">
				<h1 class="landing-title">Développeur</h1>
				<div class="content-slider">
					<div class="slider">
						<div class="mask">
							<ul>
								<li class="anim1">
									<h1 class="landing-title"><span class="gradient-text">Fullstack</span>.</h1>
								</li>
								<li class="anim2">
									<h1 class="landing-title"><span class="gradient-text">Logiciel</span>.</h1>
								</li>
								<li class="anim3">
									<h1 class="landing-title"><span class="gradient-text">Gameplay</span>.</h1>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<p class="landing-paragraph">
					Vous êtes à la recherche d'un
					<span class="important-text">professionnel du développement web</span>, passionné par son
					métier ? Vous souhaitez collaborer avec quelqu'un qui
					<span class="important-text">comprend vraiment vos besoins</span> pour créer un site web
					<span class="important-text">à votre image</span>
					? Avec mon expertise dans le <span class="important-text">développement web</span> et le
					<span class="important-text">software engineering</span>, je suis là pour vous offrir une
					solution sur mesure qui répond
					<span class="important-text"> parfaitement à vos attentes</span>.
				</p>
				<a
					aria-label="Contact: Envoyer un mail"
					class="contact-button"
					href="mailto:luc.arnould08@gmail.com?subject=Contact depuis portfolio"
				>
					<i class="ri-chat-3-line"></i>
					<span>Un projet à réaliser ? Parlons-en !</span>
				</a>
			</div>
		</article>
		<div class="deep-0">
			<div class="wave">
				<img src="waves/title-wave.svg" alt="" class="svg-filter" style="width:100%; height:100%" />
			</div>
		</div>
		<article
			class="deep-0"
			style="align-items: center; background-color: var(--black-background); display:flex; flex-direction: column;"
			id="presentation"
		>
			<div class="deep-1 about-me">
				<div data-aos="fade-right" class="who-am-i">
					<h2 class="question-title important-text">Qui je suis</h2>
					<p class="question-paragraph">
						Je m'appelle <span class="important-text">Luc</span>, je suis un jeune développeur
						passionné par le <span class="important-text">jeu vidéo</span> et le
						<span class="important-text">web</span>.<br />
						Doté de compétences solides en <span class="important-text">C#</span>,
						<span class="important-text">C++</span>
						et <span class="important-text">JavaScript</span>, je me suis impliqué dans divers
						projets de jeux, alliant développement de <span class="important-text">gameplay</span>
						et conception d'<span class="important-text">outils</span>. Mon intérêt pour le
						<span class="important-text">développement web</span>
						enrichit ma polyvalence et ma compréhension des technologies numériques.<br />
						Après une expérience chez <span class="important-text">Virtuos</span>, où j’ai participé
						au remaster d’un titre AAA emblématique, <strong>Oblivion</strong>, puis chez
						<span class="important-text">Inetum</span>
						sur des projets internes pour <strong>Orange</strong>, je me consacre désormais à
						l’accompagnement de clients dans le développement de leurs
						<span class="important-text">applications</span>
						et <span class="important-text">sites web</span>.<br />
						Toujours en quête de nouvelles compétences, je m’efforce de rester à la pointe dans l’industrie
						du jeu vidéo et du web.
					</p>
				</div>
				<div data-aos="fade-left" class="what-i-do">
					<h2 class="question-title important-text">Ce que je fais</h2>
					<p class="question-paragraph">
						Je me spécialise en <span class="important-text">développement web</span> et en
						<span class="important-text">ingénierie logicielle</span>, avec un parcours mêlant
						<span class="important-text">full-stack</span>,
						<span class="important-text">frontend moderne</span>
						et <span class="important-text">backends robustes</span>. J’interviens dans la
						conception d’<span class="important-text">applications web</span> performantes, la mise
						en place d’<span class="important-text">architectures scalables</span> et l’intégration
						de solutions modernes avec les derniers frameworks.<br /><br />
						Mon expérience dans le jeu vidéo m’a également permis de développer des compétences solides
						en <span class="important-text">développement gameplay</span> et en
						<span class="important-text">programmation d’outils</span>, que je continue à valoriser
						sur des projets techniques. Curieux et polyvalent, je reste en veille constante pour
						<span class="important-text">explorer de nouveaux domaines</span>
						et <span class="important-text">approfondir mon expertise</span>.
					</p>
				</div>
			</div>
		</article>
		<div class="deep-0">
			<div class="subwave">
				<img src="waves/wave.svg" alt="" class="svg-filter" style="width:100%; height:100%" />
			</div>
		</div>
		<article
			class="deep-0"
			style="align-items: center; display:flex; flex-direction: column;"
			id="web-skills"
		>
			<div data-aos="fade-up" class="deep-1 web-skills">
				<h2 class="question-title important-text" style="text-align: center;">
					Mes compétences web
				</h2>
				<div class="web-skills-container">
					<div class="web-skills-front">
						<h3 class="skill-category-title important-text">Front End</h3>
						<ul class="skill-list">
							<li data-aos="zoom-in">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/svelte.webp"
									alt="Svelte Logo"
									title="Svelte.js"
								/>
							</li>
							<li data-aos="zoom-in">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/angular.webp"
									alt="Angular Logo"
									title="Angular.js"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="50">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/react.webp"
									alt="React Logo"
									title="React.js"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="100">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/vue.webp"
									alt="Vue Logo"
									title="Vue.js"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="150">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/blazor.webp"
									alt="Blazor Logo"
									title="Blazor"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="200">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/bootstrap.webp"
									alt="Bootstrap Logo"
									title="Bootstrap"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="250">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/tailwind.webp"
									alt="Tailwind Logo"
									title="Tailwind"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="300">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/vite.webp"
									alt="Vite Logo"
									title="Vite"
								/>
							</li>
						</ul>
					</div>
					<div class="web-skills-back">
						<h3 class="skill-category-title important-text">Back End</h3>
						<ul class="skill-list">
							<li data-aos="zoom-in">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/node.webp"
									alt="Node.js Logo"
									title="Node.js"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="50">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/symfony.webp"
									alt="Symfony Logo"
									title="Symfony"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="50">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/mongodb.webp"
									alt="MongoDB Logo"
									title="MongoDB"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="100">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/mysql.webp"
									alt="MySQL Logo"
									title="MySQL"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="150">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/graphql.webp"
									alt="GraphQL Logo"
									title="GraphQL"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="150">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/spring.webp"
									alt="Spring Logo"
									title="Spring"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="200">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/firebase.webp"
									alt="Firebase Logo"
									title="Firebase"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="200">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/scality.webp"
									alt="Scality Logo"
									title="Scality"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="250">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/azure.webp"
									alt="Azure Logo"
									title="Azure"
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="300">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/docker.webp"
									alt="Docker Logo"
									title="Docker"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</article>
		<div class="deep-0">
			<div class="wave">
				<img src="waves/skill-wave.svg" alt="" class="svg-filter" style="width:100%; height:100%" />
			</div>
		</div>
		<article
			class="deep-0"
			style="align-items: center; background-color: var(--black-background); display:flex; flex-direction: column;"
			id="software-skills"
		>
			<div data-aos="fade-up" class="deep-1 software-skills">
				<h2 class="question-title important-text" style="text-align: center;">
					Mes compétences software
				</h2>
				<div class="software-skills-container">
					<div class="software-skills-techs">
						<h3 class="skill-category-title important-text">Technologies</h3>
						<ul class="skill-list">
							<li data-aos="zoom-in">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/wpf.webp"
									alt="WPF Logo"
									title="WPF"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="50">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/dotnet.webp"
									alt=".NET Logo"
									title=".NET"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="150">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/aspdotnet.webp"
									alt="ASP.NET Logo"
									title="ASP.NET"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="150">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/maui.webp"
									alt=".NET MAUI Logo"
									title=".NET MAUI"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="200">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/forms.webp"
									alt="Windows Forms Logo"
									title="Windows Forms"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="250">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/restapi.webp"
									alt="REST API Logo"
									title="REST API"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="300">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/qt.webp"
									alt="Qt Logo"
									title="Qt"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="350">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/csharp.webp"
									alt="C# Logo"
									title="C#"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="400">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/cpp.webp"
									alt="C++ Logo"
									title="C++"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="450">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/c.webp"
									alt="C Logo"
									title="C"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="500">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/lua.webp"
									alt="Lua Logo"
									title="Lua"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="550">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/java.webp"
									alt="Java Logo"
									title="Java"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="600">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/html.webp"
									alt="HTML 5 Logo"
									title="HTML"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="600">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/css.webp"
									alt="CSS 3 Logo"
									title="CSS"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="600">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/js.webp"
									alt="JavaScript Logo"
									title="JavaScript"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="650">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/python.webp"
									alt="Python Logo"
									title="Python"
									invertColor={true}
								/>
							</li>
						</ul>
					</div>
					<div class="software-skills-tools">
						<h3 class="skill-category-title important-text">Outils</h3>
						<ul class="skill-list">
							<li data-aos="zoom-in">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/figma.webp"
									alt="Figma Logo"
									title="Figma"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="50">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/git.webp"
									alt="Git Logo"
									title="Git"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="50">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/sourcetree.webp"
									alt="SourceTree Logo"
									title="SourceTree"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="150">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/p4.webp"
									alt="Perforce Logo"
									title="Perforce"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="150">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/heidisql.webp"
									alt="HeidiSQL Logo"
									title="HeidiSQL"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="200">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/vs.webp"
									alt="Visual Studio Logo"
									title="Visual Studio"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="250">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/rider.webp"
									alt="Rider Logo"
									title="Rider"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="300">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/idea.webp"
									alt="IntelliJ Idea Logo"
									title="IntelliJ Idea"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="350">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/dottrace.webp"
									alt="DotTrace Logo"
									title="DotTrace"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="400">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/teamcity.webp"
									alt="TeamCity Logo"
									title="TeamCity"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="450">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/superluminal.webp"
									alt="Superluminal Logo"
									title="Superluminal"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="500">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/postman.webp"
									alt="Postman Logo"
									title="Postman"
									invertColor={true}
								/>
							</li>
							<li data-aos="zoom-in" data-aos-delay="550">
								<SkillContainer
									size={skillIconSize}
									img="./skills-icons/photoshop.webp"
									alt="Photoshop Logo"
									title="Photoshop"
									invertColor={true}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</article>
		<div class="deep-0">
			<div class="subwave">
				<img
					src="waves/skill-subwave.svg"
					alt=""
					class="svg-filter"
					style="width:100%; height:100%"
				/>
			</div>
		</div>
		<article class="deep-0" style="align-items: center; display:flex; flex-direction: column;">
			<div data-aos="fade-up" class="deep-1 game-skills" id="game-skills">
				<h2 class="question-title important-text" style="text-align: center;">
					Mes compétences jeux
				</h2>
				<div
					style="display: flex; justify-content: space-between; width: 100%; margin-top: 2rem; flex-direction: column; align-items: center;"
				>
					<h3 class="skill-category-title important-text">Moteurs et outils</h3>
					<ul class="skill-list">
						<li data-aos="zoom-in">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/unity.webp"
								alt="Unity Logo"
								title="Unity"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="50">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/unreal.webp"
								alt="Unreal Engine Logo"
								title="Unreal Engine"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="150">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/sfml.webp"
								alt="SFML Logo"
								title="SFML"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="200">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/love2d.webp"
								alt="Löve2D Logo"
								title="Löve2D"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="250">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/substance.webp"
								alt="Substance Logo"
								title="Suite Substance"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="300">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/blender.webp"
								alt="Blender Logo"
								title="Blender"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="350">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/maya.webp"
								alt="Maya Logo"
								title="Maya"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="400">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/wwise.webp"
								alt="Wwise Logo"
								title="Wwise"
							/>
						</li>
						<li data-aos="zoom-in" data-aos-delay="450">
							<SkillContainer
								size={skillIconSize}
								img="./skills-icons/fmod.webp"
								alt="Fmod Logo"
								title="Fmod"
							/>
						</li>
					</ul>
				</div>
			</div>
		</article>
		<div class="deep-0" style="margin-top: 2rem;">
			<div class="wave">
				<img src="waves/exp-wave.svg" alt="" class="svg-filter" style="width:100%; height:100%" />
			</div>
		</div>
		<article
			class="deep-0"
			style="align-items: center; background-color: var(--black-background); display:flex; flex-direction: column;"
			id="projects"
		>
			<div data-aos="fade-up" class="projects">
				<h2 class="question-title important-text">Mes projets</h2>
				<div class="deep-1 grid-container">
					{#if showMoreProject}
						{#each projects as project}
							<ProjectCard {project} />
						{/each}
					{:else}
						{#each projects.slice(0, 5) as project}
							<ProjectCard {project} />
						{/each}
					{/if}
				</div>
				<button class="show-more-btn" on:click={() => switchShowMoreProjects()}>
					<i class={`ri-arrow-${showMoreProject ? 'up' : 'down'}-s-fill`}></i>
					<span>{`Afficher ${showMoreProject ? 'moins' : 'plus'}`}</span>
					<i class={`ri-arrow-${showMoreProject ? 'up' : 'down'}-s-fill`}></i>
				</button>
			</div>
		</article>
		<div class="deep-0">
			<div class="subwave">
				<img
					src="waves/exp-subwave.svg"
					alt=""
					class="svg-filter"
					style="width:100%; height:100%"
				/>
			</div>
		</div>
		<article class="deep-0" style="display:flex; align-items: center; flex-direction: column;">
			<div class="deep-1 experience" id="experience">
				<h2 class="question-title important-text">Mon parcours</h2>
				<div style="margin-top: 2rem;">
					<div data-aos="fade-left" class="alternating-container">
						<div class="alternating-content">
							<div class="cv-card">
								<div style="padding: 2rem;">
									<h3 class="cv-title">Développeur - Inetum</h3>
									<p class="cv-date">11/2024 - Actuellement</p>
									<p class="cv-description">
										Développement fullstack.<br /><br />
										Expérience chez Inetum sur des projets internes pour Orange, avec un focus sur des
										applications web développées en Symfony et Angular. Des outils mobiles ont également
										été conçus en .NET MAUI et Xamarin, principalement pour des besoins internes.<br
										/><br />
										Le contexte agile et les enjeux opérationnels ont permis d’aborder divers aspects
										du cycle de vie logiciel : mises en production régulières, automatisation d’outils
										internes, gestion de tickets et traitement d’incidents techniques.
									</p>

									<Separator />
									<div class="cv-skill-container">
										<SkillContainer
											size="40px"
											img="./skills-icons/symfony.webp"
											alt="Symfony Logo"
											imgTitle="Symfony"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/maui.webp"
											alt="MAUI Logo"
											imgTitle="MAUI"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/git.webp"
											alt="Git Logo"
											imgTitle="Git"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/sourcetree.webp"
											alt="SourceTree Logo"
											imgTitle="SourceTree"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/html.webp"
											alt="HTML 5 Logo"
											imgTitle="HTML"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/css.webp"
											alt="CSS 3 Logo"
											imgTitle="CSS"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/js.webp"
											alt="JavaScript Logo"
											imgTitle="JavaScript"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/csharp.webp"
											alt="C# Logo"
											imgTitle="C#"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/scality.webp"
											alt="Scality Logo"
											imgTitle="Scality"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/heidisql.webp"
											alt="HeidiSQL Logo"
											imgTitle="HeidiSQL"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/postman.webp"
											alt="Postman Logo"
											imgTitle="Postman"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/bootstrap.webp"
											alt="Bootstrap Logo"
											imgTitle="Bootstrap"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="alternating-container">
						<div data-aos="fade-right" class="alternating-content">
							<div class="cv-card">
								<div style="padding: 2rem;">
									<h3 class="cv-title">Software Engineer - Virtuos</h3>
									<p class="cv-date">10/2023 - 10/2024</p>
									<p class="cv-description">
										Software engineering et développement UI.<br /><br />
										Expérience chez Virtuos Labs Montpellier sur des projets soumis à accords de non-divulgation,
										dont la participation au remaster d’un jeu AAA iconique, notamment
										<strong>Oblivion</strong>.<br /><br />
										Intervention sur des logiciels internes et outils techniques, principalement en WPF,
										avec un travail sur l’optimisation, la maintenance et l’évolution des interfaces.
										Compétences élargies à ASP.NET, aux APIs REST, ainsi qu'à l’intégration continue
										avec des outils comme TeamCity.<br /><br />
										Méthodologies agiles (SCRUM) et adaptation continue dans des environnements techniques
										en évolution rapide.
									</p>

									<Separator />
									<div class="cv-skill-container">
										<SkillContainer
											size="40px"
											img="./skills-icons/wpf.webp"
											alt="WPF Logo"
											imgTitle="WPF"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/dotnet.webp"
											alt=".NET Logo"
											imgTitle=".NET"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/aspdotnet.webp"
											alt="ASP.NET Logo"
											imgTitle="ASP.NET"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/forms.webp"
											alt="Windows Forms Logo"
											imgTitle="Windows Forms"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/restapi.webp"
											alt="REST API Logo"
											imgTitle="REST API"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/csharp.webp"
											alt="C# Logo"
											imgTitle="C#"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/cpp.webp"
											alt="C++ Logo"
											imgTitle="C++"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/html.webp"
											alt="HTML 5 Logo"
											imgTitle="HTML"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/css.webp"
											alt="CSS 3 Logo"
											imgTitle="CSS"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/js.webp"
											alt="JavaScript Logo"
											imgTitle="JavaScript"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/python.webp"
											alt="Python Logo"
											imgTitle="Python"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/p4.webp"
											alt="Perforce Logo"
											imgTitle="Perforce"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/vs.webp"
											alt="Visual Studio Logo"
											imgTitle="Visual Studio"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/rider.webp"
											alt="Rider Logo"
											imgTitle="Rider"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/dottrace.webp"
											alt="DotTrace Logo"
											imgTitle="DotTrace"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/teamcity.webp"
											alt="TeamCity Logo"
											imgTitle="TeamCity"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/superluminal.webp"
											alt="Superluminal Logo"
											imgTitle="Superluminal"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/postman.webp"
											alt="Postman Logo"
											imgTitle="Postman"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-aos="fade-left" class="alternating-container">
						<div class="alternating-content">
							<div class="cv-card">
								<div style="padding: 2rem;">
									<h3 class="cv-title">Eritaj - Gaya Player</h3>
									<p class="cv-date">04/2023 - 08/2023</p>
									<p class="cv-description">
										Stage de fin d'études – Développement Gameplay & UI.<br /><br />
										Participation à plusieurs projets au sein d’Eritaj Studio, avec un focus particulier
										sur le portage de l’application mobile Gaya Explorer, initialement développée en
										React Native, vers Unity. L’ensemble du travail a couvert la programmation de l’interface
										utilisateur, des mécaniques de gameplay et la création d’outils de production.<br
										/><br />
										En parallèle, des améliorations ont été apportées à la version React Native d’origine,
										avec le développement de nouvelles fonctionnalités. L’expérience a permis de naviguer
										entre Unity et React Native dans un contexte de production mobile multiplateforme.
									</p>

									<Separator />
									<div class="cv-skill-container">
										<SkillContainer
											size="40px"
											img="./skills-icons/unity.webp"
											alt="Unity Logo"
											imgTitle="Unity"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/react.webp"
											alt="React Logo"
											imgTitle="React"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/git.webp"
											alt="Git Logo"
											imgTitle="Git"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/vite.webp"
											alt="Vite Logo"
											imgTitle="Vite"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/html.webp"
											alt="HTML 5 Logo"
											imgTitle="HTML"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/css.webp"
											alt="CSS 3 Logo"
											imgTitle="CSS"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/js.webp"
											alt="JavaScript Logo"
											imgTitle="JavaScript"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/csharp.webp"
											alt="C# Logo"
											imgTitle="C#"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/node.webp"
											alt="Node.js Logo"
											imgTitle="Node.js"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/firebase.webp"
											alt="Firebase Logo"
											imgTitle="Firebase"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/figma.webp"
											alt="Figma Logo"
											imgTitle="Figma"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/photoshop.webp"
											alt="Photoshop Logo"
											imgTitle="Photoshop"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-aos="fade-right" class="alternating-container">
						<div class="alternating-content">
							<div class="cv-card">
								<div style="padding: 2rem;">
									<h3 class="cv-title">Creajeux - Formation Programmeur Jeu Vidéo (RNCP 6)</h3>
									<p class="cv-date">2019 - 2023</p>

									<p class="cv-description">
										Études supérieures en développement de jeux vidéo.<br /><br />
										Formation pluridisciplinaire sur quatre ans axée sur la programmation, la conception
										et la production de jeux vidéo. Enseignement des principaux moteurs tels qu’Unity
										et Unreal Engine, avec une approche concrète des méthodologies de développement logiciel
										appliquées au jeu vidéo.<br /><br />
										Le cursus inclut également des bases solides en graphisme (Photoshop, Blender, Substance)
										et en intégration sonore (Wwise, FMOD).<br /><br />
										Plusieurs projets ont été menés, en solo comme en équipe, dont certains sont présentés
										dans la section dédiée de ce portfolio.
									</p>

									<Separator />
									<div class="cv-skill-container">
										<SkillContainer
											size="40px"
											img="./skills-icons/unity.webp"
											alt="Unity Logo"
											imgTitle="Unity"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/unreal.webp"
											alt="Unreal Engine Logo"
											imgTitle="Unreal Engine"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/sfml.webp"
											alt="SFML Logo"
											imgTitle="SFML"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/love2d.webp"
											alt="Löve2D Logo"
											imgTitle="Löve2D"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/substance.webp"
											alt="Substance Logo"
											imgTitle="Substance"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/blender.webp"
											alt="Blender Logo"
											imgTitle="Blender"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/maya.webp"
											alt="Maya Logo"
											imgTitle="Maya"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/wwise.webp"
											alt="Wwise Logo"
											imgTitle="Wwise"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/fmod.webp"
											alt="Fmod Logo"
											imgTitle="Fmod"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/photoshop.webp"
											alt="Photoshop Logo"
											imgTitle="Photoshop"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/postman.webp"
											alt="Postman Logo"
											imgTitle="Postman"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/rider.webp"
											alt="Rider Logo"
											imgTitle="Rider"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/vs.webp"
											alt="Visual Studio Logo"
											imgTitle="Visual Studio"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/git.webp"
											alt="Git Logo"
											imgTitle="Git"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/python.webp"
											alt="Python Logo"
											imgTitle="Python"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/lua.webp"
											alt="Lua Logo"
											imgTitle="Lua"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/c.webp"
											alt="C Logo"
											imgTitle="C"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/cpp.webp"
											alt="C++ Logo"
											imgTitle="C++"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/csharp.webp"
											alt="C# Logo"
											imgTitle="C#"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/qt.webp"
											alt="Qt Logo"
											imgTitle="Qt"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/restapi.webp"
											alt="REST API Logo"
											imgTitle="REST API"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/forms.webp"
											alt="Windows Forms Logo"
											imgTitle="Windows Forms"
										/>
										<SkillContainer
											size="40px"
											img="./skills-icons/wpf.webp"
											alt="WPF Logo"
											imgTitle="WPF"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
</main>
<Footer links={footerLinks} />

<style>
	main {
		display: flex;
		justify-content: center;

		background-image: var(--background-image);
		background-repeat: repeat;
		background-size: 50vw;
	}

	.who-am-i {
		width: 47%;
	}

	.what-i-do {
		width: 47%;
		margin-top: 15rem;
	}

	.web-skills {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 3%;
	}

	.web-skills-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 2rem;
	}

	.web-skills-front {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.web-skills-back {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.software-skills {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 3%;
	}

	.software-skills-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 2rem;
	}

	.software-skills-tools {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.software-skills-techs {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.game-skills {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.projects {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.experience {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
	}

	.deep-0 {
		overflow: hidden;
		width: 100vw;
		padding: 0;
	}

	.deep-1 {
		overflow: hidden;
		max-width: 80rem;
		padding-inline: 5rem;
	}

	.skill-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		margin-top: 25px;
		list-style-type: none;
		padding: 0;
	}

	.about-me {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.skill-list li {
		content: '';
	}

	.landing-article {
		height: 100vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.photo-container {
		width: 30%;
	}

	.photo-container img {
		box-sizing: border-box;
		object-fit: cover;
		border-radius: 1rem;
		height: 500px;
		width: 100%;
		filter: drop-shadow(6px 6px 6px rgba(0, 0, 0, 0.3));
		border: var(--primary) solid 3px;
	}

	.description-container {
		width: 60%;
		flex-direction: column;
		align-items: baseline;
	}

	.contact-button {
		color: #fff;
		background: var(--primary);
		padding: 10px 25px;
		border: none;
		box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
		border-radius: 8px;
		transition: background 0.15s ease-in-out;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		margin-top: 4rem;
		width: fit-content;
		text-decoration: none;
	}

	.contact-button i {
		margin-left: 0.5rem;
		font-size: 1rem;
	}

	.contact-button:hover {
		background: var(--primary-light);
	}

	.landing-title {
		font-size: clamp(3rem, 8vw, 6rem);
		color: var(--black);
		text-size-adjust: 100%;
	}

	.question-title {
		font-size: clamp(2rem, 5vw, 4rem);
		color: var(--black);
		text-size-adjust: 100%;
	}

	.skill-category-title {
		font-size: clamp(1rem, 4vw, 3rem);
		color: var(--black);
		text-size-adjust: 100%;
		text-align: center;
	}

	.landing-paragraph {
		font-size: clamp(0.75rem, 3vw, 1.25rem);
		color: var(--black);
		margin-top: 2rem;
		text-align: justify;
		transition: color 0.15s ease-in-out;
	}

	.important-text {
		color: var(--primary-light);
		font-weight: 600;
	}

	.content-slider {
		height: clamp(4rem, 10vw, 7rem);
	}

	.slider {
		height: clamp(4rem, 10vw, 7rem);
		overflow: visible;
		position: relative;
	}

	.mask {
		overflow: hidden;
		height: clamp(4rem, 10vw, 7rem);
	}

	.slider ul {
		margin: 0;
		padding: 0;
		position: relative;
	}

	.slider li {
		height: clamp(4rem, 10vw, 7rem);
		position: absolute;
		top: -150px;
		list-style: none;
	}

	.slider li.anim1 {
		animation: cycle 10s linear infinite;
	}

	.slider li.anim2 {
		animation: cycle2 10s linear infinite;
	}

	.slider li.anim3 {
		animation: cycle3 10s linear infinite;
	}

	@keyframes cycle {
		0% {
			top: -150px;
			opacity: 0;
		}
		4% {
			top: 0px;
			opacity: 1;
		}
		29% {
			top: 0px;
			opacity: 1;
		}
		33% {
			top: 150px;
			opacity: 0;
		}
		34% {
			top: -150px;
			opacity: 0;
		}
		100% {
			top: -150px;
			opacity: 0;
		}
	}

	@keyframes cycle2 {
		0% {
			top: -150px;
			opacity: 0;
		}
		29% {
			top: -150px;
			opacity: 1;
		}
		33% {
			top: 0px;
			opacity: 1;
		}
		62% {
			top: 0px;
			opacity: 1;
		}
		66% {
			top: 150px;
			opacity: 0;
		}
		67% {
			top: -150px;
			opacity: 0;
		}
		100% {
			top: -150px;
			opacity: 0;
		}
	}

	@keyframes cycle3 {
		0% {
			top: -150px;
			opacity: 0;
		}
		62% {
			top: -150px;
			opacity: 1;
		}
		66% {
			top: 0px;
			opacity: 1;
		}
		96% {
			top: 0px;
			opacity: 1;
		}
		100% {
			top: 150px;
			opacity: 0;
		}
	}

	.question-paragraph {
		font-size: clamp(0.75rem, 3vw, 1.25rem);
		color: var(--black);
		margin-top: 2rem;
		text-align: justify;
		transition: color 0.15s ease-in-out;
	}

	.subwave {
		width: 100%;
		font-size: 0;
		line-height: 0;
		transform: translateY(-2px);
	}

	.wave {
		width: 100%;
		font-size: 0;
		line-height: 0;
		transform: translateY(2px);
	}

	.gradient-text {
		background: #db0f13;
		background: -webkit-linear-gradient(to right, #d85f13, #db0f13);
		background: linear-gradient(to right, #d85f13, #db0f13);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}

	.grid-container {
		width: 100%;
		width: auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 2rem;
		grid-row-gap: 1rem;
		margin-top: 2rem;
	}

	.alternating-container {
		width: 100%;
		display: flex;
	}

	.alternating-container:nth-child(odd) {
		justify-content: flex-start;
		text-align: start;
	}

	.alternating-container:nth-child(even) {
		justify-content: flex-end;
		text-align: end;
	}

	.alternating-content {
		width: 47%;
	}

	.cv-card {
		box-sizing: border-box;
		border: var(--primary) solid 3px;
		border-radius: 1rem;
		-webkit-box-shadow: 5px 5px 13px 4px rgba(0, 0, 0, 0.5);
		box-shadow: 5px 5px 13px 4px rgba(0, 0, 0, 0.5);
		overflow: hidden;
		transition: box-shadow 0.3s;
		width: 100%;

		background-color: var(--light);
	}

	.cv-title {
		font-size: 1.5rem;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		color: var(--primary);
		text-size-adjust: 100%;
		font-weight: bold;
	}

	.cv-date {
		font-size: 1rem;
		font-size: clamp(1rem, 3vw, 2rem);
		color: var(--primary-light);
		text-size-adjust: 100%;
		font-weight: bold;
	}

	.cv-description {
		font-size: 0.75rem;
		font-size: clamp(0.75rem, 3vw, 1.25rem);
		margin-top: 2rem;
		color: var(--black);
		text-size-adjust: 100%;
	}

	.cv-skill-container {
		gap: 15px;
		margin-top: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.75rem;
	}

	.show-more-btn {
		display: none;
	}

	@media screen and (min-width: 2000px) {
		.photo-container img {
			height: 620px;
		}
	}

	@media screen and (max-width: 950px) {
		.deep-1 {
			margin-inline: 1rem;
			padding-inline: 0;
		}

		.landing-article {
			flex-direction: column-reverse;
			height: auto;
			margin-top: 125px;
			margin-bottom: 75px;
			gap: 5rem;
		}

		.landing-title {
			text-align: center;
		}

		.anim1,
		.anim2,
		.anim3 {
			width: 100%;
		}

		.landing-paragraph {
			text-align: justify;
			font-size: 1rem;
		}

		.contact-button {
			margin-top: 2rem;
		}

		.photo-container {
			box-sizing: border-box;
			width: 100%;
		}

		.description-container {
			width: 100%;
		}

		.about-me {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-top: 75px;
			padding-bottom: 75px;
		}

		.who-am-i {
			width: 100%;
		}

		.what-i-do {
			width: 100%;
			margin-top: 4rem;
		}

		.question-title {
			font-size: 2.5rem;
		}

		.question-paragraph {
			margin-top: 1rem;
			font-size: 1rem;
		}

		.web-skills {
			width: auto;
			padding-top: 75px;
			padding-bottom: 75px;
		}

		.web-skills-container {
			flex-direction: column;
			gap: 2rem;
		}

		.web-skills-front {
			width: auto;
		}

		.web-skills-back {
			width: auto;
		}

		.skill-category-title {
			font-size: 1.5rem;
		}

		.software-skills {
			width: auto;
			padding-top: 75px;
			padding-bottom: 75px;
		}

		.software-skills-container {
			flex-direction: column;
			gap: 2rem;
		}

		.software-skills-tools {
			width: auto;
		}

		.software-skills-techs {
			width: auto;
		}

		.game-skills {
			width: auto;
			padding-top: 75px;
			padding-bottom: 75px;
		}

		.projects {
			width: auto;
			padding-top: 75px;
			padding-bottom: 75px;
		}

		.experience {
			width: auto;
			padding-top: 75px;
			padding-bottom: 75px;
		}

		.alternating-container {
			margin-bottom: 2rem;
		}

		.alternating-container:nth-child(even) {
			justify-content: flex-start;
			text-align: start;
		}

		.alternating-content {
			width: 100%;
		}

		.cv-description {
			font-size: 1rem;
			text-align: center;
		}

		.cv-date {
			font-size: 1.25rem;
			text-align: center;
		}

		.cv-title {
			font-size: 2rem;
			text-align: center;
		}

		.grid-container {
			display: flex;
			flex-direction: column;
		}

		.show-more-btn {
			display: block;
			box-sizing: border-box;
			color: var(--primary);
			background: transparent;
			border: solid var(--primary) 3px;
			padding: 10px 25px;
			box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
			border-radius: 8px;
			transition:
				color 0.15s ease-in-out,
				border 0.15s ease-in-out;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			cursor: pointer;
			font-size: 1rem;
			font-weight: 600;
			margin-top: 1rem;
		}

		.show-more-btn:hover {
			border: solid var(--primary-light) 3px;
			color: var(--primary-light);
		}

		.show-more-btn span {
			margin-inline: 1rem;
		}
	}
</style>
