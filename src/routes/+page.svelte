<script>
	import Header from '../components/Header.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import Separator from '../components/Separator.svelte';
	import SkillContainer from '../components/SkillContainer.svelte';
	import { projects } from '../projects.js';
	import { onMount } from 'svelte';

	let links = [
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

	onMount(() => {
		document.title = 'Luc Arnould - Développeur';
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
	<meta property="og:url" content="https://metatags.io/" />
	<meta property="og:title" content="Luc Arnould - Développeur" />
	<meta
		property="og:description"
		content="Luc Arnould. Développeur Gameplay, Logiciel et Fullstack. Passionné d'informatique et de développement, je vous présente mon portfolio."
	/>
	<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://metatags.io/" />
	<meta property="twitter:title" content="Luc Arnould - Développeur" />
	<meta
		property="twitter:description"
		content="Luc Arnould. Développeur Gameplay, Logiciel et Fullstack. Passionné d'informatique et de développement, je vous présente mon portfolio."
	/>
	<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
</svelte:head>

<Header {links} mainButtonType="scroll" />
<main>
	<div class="main-container">
		<article class="landing-article deep-1">
			<div class="photo-container">
				<img src="Mwa.webp" alt="Luc Arnould" title="Moi" />
			</div>
			<div class="description-container">
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
				<button aria-label="Contact" class="contact-button">
					<i class="ri-chat-3-line"></i>
					<span>Un projet à réaliser ? Parlons-en !</span>
				</button>
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
			<div
				class="deep-1"
				style="display: flex; flex-direction: row; justify-content: space-between;"
			>
				<div style="width: 47%;">
					<h2 class="question-title important-text">Qui je suis</h2>
					<p class="question-paragraph">
						Je m'appelle <span class="important-text">Luc</span>, je suis un jeune développeur
						passionné par le <span class="important-text">jeu vidéo</span> et le
						<span class="important-text">web</span>.<br />
						Doté de compétences solides en <span class="important-text">C#</span>,
						<span class="important-text">C++</span>
						et <span class="important-text">Javascript</span>, je me suis impliqué dans divers
						projets de jeux, où j'ai allié développement de
						<span class="important-text">gameplay</span>
						et conception d'<span class="important-text">outils</span>. Mon intérêt ne se limite pas
						au domaine ludique: je suis également attiré par le
						<span class="important-text">développement web</span>, ce qui enrichit ma polyvalence et
						ma compréhension des technologies numériques.<br />
						Toujours en quête de nouvelles compétences, je m'efforce de rester à la pointe dans l'industrie
						du jeu vidéo et du web. Je suis actuellement Software Engineer chez
						<span
							><a
								aria-label="Virtuos France"
								class="important-text"
								target="_blank"
								href="https://www.virtuosgames.com/virtuos-labs-montpellier/">Virtuos France</a
							></span
						> où je travaille sur des projets de AAA.
					</p>
				</div>
				<div style="width: 47%; margin-top:15rem">
					<h2 class="question-title important-text">Ce que je fais</h2>
					<p class="question-paragraph">
						Je me spécialise en <span class="important-text">développement logiciel</span>, avec un
						accent particulier sur le <span class="important-text">gameplay</span>, l'<span
							class="important-text">ingénierie logicielle</span
						>
						et le <span class="important-text">développement full-stack</span>. Je suis apte à
						travailler aussi bien sur des projets de gameplay qu'à la mise en place de
						<span class="important-text">structures de données</span>
						et d'<span class="important-text">architectures complexes</span>, ou encore au
						développement de <span class="important-text">sites web</span> utilisant les derniers
						frameworks JavaScript. Ma passion pour le développement me pousse constamment à explorer
						de <span class="important-text">nouveaux domaines</span> et à
						<span class="important-text">élargir mon champ de compétences</span>.
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
			<div
				class="deep-1"
				style="width: 100%; display:flex; align-items: center; flex-direction: column;"
			>
				<h2 class="question-title important-text" style="text-align: center;">
					Mes compétences web
				</h2>
				<div style="display: flex; justify-content: space-between; width: 100%; margin-top: 2rem;">
					<div style="width: 47%; display: flex; align-items: center; flex-direction: column;">
						<h3 class="skill-category-title important-text">Front End</h3>
						<ul class="skill-list">
							<li>
								<SkillContainer
									img="./skills-icons/svelte.webp"
									alt="Svelte Logo"
									title="Svelte.js"
								/>
							</li>
							<li>
								<SkillContainer img="./skills-icons/react.webp" alt="React Logo" title="React.js" />
							</li>
							<li>
								<SkillContainer img="./skills-icons/vue.webp" alt="Vue Logo" title="Vue.js" />
							</li>
							<li>
								<SkillContainer img="./skills-icons/blazor.webp" alt="Blazor Logo" title="Blazor" />
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/bootstrap.webp"
									alt="Bootstrap Logo"
									title="Bootstrap"
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/tailwind.webp"
									alt="Tailwind Logo"
									title="Tailwind"
								/>
							</li>
							<li>
								<SkillContainer img="./skills-icons/vite.webp" alt="Vite Logo" title="Vite" />
							</li>
						</ul>
					</div>
					<div style="width: 47%; display: flex; align-items: center; flex-direction: column;">
						<h3 class="skill-category-title important-text">Back End</h3>
						<ul class="skill-list">
							<li>
								<SkillContainer img="./skills-icons/node.webp" alt="Node.js Logo" title="Node.js" />
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/mongodb.webp"
									alt="MongoDB Logo"
									title="MongoDB"
								/>
							</li>
							<li>
								<SkillContainer img="./skills-icons/mysql.webp" alt="MySQL Logo" title="MySQL" />
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/graphql.webp"
									alt="GraphQL Logo"
									title="GraphQL"
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/firebase.webp"
									alt="Firebase Logo"
									title="Firebase"
								/>
							</li>
							<li>
								<SkillContainer img="./skills-icons/azure.webp" alt="Azure Logo" title="Azure" />
							</li>
							<li>
								<SkillContainer img="./skills-icons/docker.webp" alt="Docker Logo" title="Docker" />
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
			<div
				class="deep-1"
				style="width: 100%; display:flex; align-items: center; flex-direction: column;"
			>
				<h2 class="question-title important-text" style="text-align: center;">
					Mes compétences software
				</h2>
				<div style="display: flex; justify-content: space-between; width: 100%; margin-top: 2rem;">
					<div style="width: 47%; display: flex; align-items: center; flex-direction: column;">
						<h3 class="skill-category-title important-text">Technologies</h3>
						<ul class="skill-list">
							<li>
								<SkillContainer
									img="./skills-icons/wpf.webp"
									alt="WPF Logo"
									title="WPF"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/dotnet.webp"
									alt=".NET Logo"
									title=".NET"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/aspdotnet.webp"
									alt="ASP.NET Logo"
									title="ASP.NET"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/forms.webp"
									alt="Windows Forms Logo"
									title="Windows Forms"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/restapi.webp"
									alt="REST API Logo"
									title="REST API"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/qt.webp"
									alt="Qt Logo"
									title="Qt"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/csharp.webp"
									alt="C# Logo"
									title="C#"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/cpp.webp"
									alt="C++ Logo"
									title="C++"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/c.webp"
									alt="C Logo"
									title="C"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/lua.webp"
									alt="Lua Logo"
									title="Lua"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/java.webp"
									alt="Java Logo"
									title="Java"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/js.webp"
									alt="JavaScript Logo"
									title="JavaScript"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/python.webp"
									alt="Python Logo"
									title="Python"
									invertColor={true}
								/>
							</li>
						</ul>
					</div>
					<div style="width: 47%; display: flex; align-items: center; flex-direction: column;">
						<h3 class="skill-category-title important-text">Outils</h3>
						<ul class="skill-list">
							<li>
								<SkillContainer
									img="./skills-icons/figma.webp"
									alt="Figma Logo"
									title="Figma"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/git.webp"
									alt="Git Logo"
									title="Git"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/p4.webp"
									alt="Perforce Logo"
									title="Perforce"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/vs.webp"
									alt="Visual Studio Logo"
									title="Visual Studio"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/rider.webp"
									alt="Rider Logo"
									title="Rider"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/idea.webp"
									alt="IntelliJ Idea Logo"
									title="IntelliJ Idea"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/dottrace.webp"
									alt="DotTrace Logo"
									title="DotTrace"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/teamcity.webp"
									alt="TeamCity Logo"
									title="TeamCity"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/superluminal.webp"
									alt="Superluminal Logo"
									title="Superluminal"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
									img="./skills-icons/postman.webp"
									alt="Postman Logo"
									title="Postman"
									invertColor={true}
								/>
							</li>
							<li>
								<SkillContainer
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
			<div
				class="deep-1"
				style="width: 100%; display:flex; align-items: center; flex-direction: column;"
				id="game-skills"
			>
				<h2 class="question-title important-text" style="text-align: center;">
					Mes compétences jeux
				</h2>
				<div
					style="display: flex; justify-content: space-between; width: 100%; margin-top: 2rem; flex-direction: column; align-items: center;"
				>
					<h3 class="skill-category-title important-text">Moteurs et outils</h3>
					<ul class="skill-list">
						<li>
							<SkillContainer img="./skills-icons/unity.webp" alt="Unity Logo" title="Unity" />
						</li>
						<li>
							<SkillContainer
								img="./skills-icons/unreal.webp"
								alt="Unreal Engine Logo"
								title="Unreal Engine"
							/>
						</li>
						<li>
							<SkillContainer img="./skills-icons/sfml.webp" alt="SFML Logo" title="SFML" />
						</li>
						<li>
							<SkillContainer img="./skills-icons/love2d.webp" alt="Löve2D Logo" title="Löve2D" />
						</li>
						<li>
							<SkillContainer
								img="./skills-icons/substance.webp"
								alt="Substance Logo"
								title="Suite Substance"
							/>
						</li>
						<li>
							<SkillContainer
								img="./skills-icons/blender.webp"
								alt="Blender Logo"
								title="Blender"
							/>
						</li>
						<li>
							<SkillContainer img="./skills-icons/maya.webp" alt="Maya Logo" title="Maya" />
						</li>
						<li>
							<SkillContainer img="./skills-icons/wwise.webp" alt="Wwise Logo" title="Wwise" />
						</li>
						<li>
							<SkillContainer img="./skills-icons/fmod.webp" alt="Fmod Logo" title="Fmod" />
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
			<div
				class="deep-1"
				style="width: 100%; display:flex; align-items: center; flex-direction: column;"
			>
				<h2 class="question-title important-text">Mes projets</h2>
				<div class="grid-container">
					{#each projects as project}
						<ProjectCard {project} />
					{/each}
				</div>
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
			<div
				class="deep-1"
				style="width: 100%; display:flex; align-items: center; flex-direction: column;"
				id="experience"
			>
				<h2 class="question-title important-text">Mon parcours</h2>
				<div style="margin-top: 2rem;">
					<div class="alternating-container">
						<div class="alternating-content">
							<div class="cv-card">
								<div style="padding: 2rem;">
									<h3 class="cv-title">Software Engineer - Virtuos</h3>
									<p class="cv-date">10/2023 - Maintenant</p>
									<p class="cv-description">
										Travail actuel, software engineering.<br /><br />

										Ingénieur logiciel chez Virtuos Labs à Montpellier, je navigue entre diverses
										responsabilités techniques, soumises à la confidentialité due à des accords de
										non-divulgation.<br /><br />
										Mon expertise s'étend principalement autour de WPF pour le développement, l'optimisation,
										et la maintenance de logiciels, tout en enrichissant mon savoir-faire avec ASP.NET,
										API REST, et les outils de CI/CD comme TeamCity.<br /><br />
										Agile et SCRUM guident mes méthodes de travail, me permettant d'ajuster dynamiquement
										mes contributions aux projets face aux changements imprévus.
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
					<div class="alternating-container">
						<div class="alternating-content">
							<div class="cv-card">
								<div style="padding: 2rem;">
									<h3 class="cv-title">Eritaj - Gaya Player</h3>
									<p class="cv-date">04/2023 - 08/2023</p>
									<p class="cv-description">
										Stage de fin d'études, développeur Gameplay / UI.<br /><br />
										Chez Eritaj Studio, j'ai contribué à plusieurs projets, avec deux réalisations majeures.<br
										/><br />
										Portage sur Unity de Gaya Explorer, initialement développé en React Native. Mon rôle
										a englobé la programmation UI, Gameplay et d'outils.<br /><br />
										Amélioration du jeu initial, avec le développement de nouvelles fonctionnalités en
										React Native.
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
					<div class="alternating-container">
						<div class="alternating-content">
							<div class="cv-card">
								<div style="padding: 2rem;">
									<h3 class="cv-title">Creajeux - Formation Programmeur Jeu Vidéo (RNCP 6)</h3>
									<p class="cv-date">2019 - 2023</p>

									<p class="cv-description">
										Études supérieures en développement de jeux vidéo.<br /><br />
										Ces 4 années ont été cruciales pour l'acquisition de mes compétences en programmation.<br
										/><br />
										La formation m'a appris à maîtriser divers moteurs de jeu, comme Unity et Unreal
										Engine, et à comprendre les méthodologies de création de jeux et de programmes.<br
										/><br />
										J'ai aussi acquis des connaissances en graphisme (Photoshop, Blender, Substance)
										et en intégration sonore (Wwise, FMOD).<br /><br />
										J'ai réalisé plusieurs projets, tant individuels qu'en équipe, dont certains sont
										présentés dans la section Projets de ce portfolio.
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

<style>
	main {
		display: flex;
		justify-content: center;

		background-image: var(--background-image);
		background-repeat: repeat;
		background-size: 50vw;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
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
</style>
