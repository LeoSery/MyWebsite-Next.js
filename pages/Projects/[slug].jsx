import { useRouter } from "next/router";
import Head from "next/head";
import ProjectTemplate from "../../components/Projects/ProjectTemplate";
import { projectsData } from "../../components/Projects/ProjectsData";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Fonction pour trouver le projet correspondant au slug
  const findProject = (slug) => {
    // Convertir le slug en URL format (/Projects/project-name)
    const projectUrl = `/Projects/${slug}`;
    return projectsData.find(project => project.Url === projectUrl);
  };

  // Si la page est en cours de chargement
  if (!slug) {
    return <div>Loading...</div>;
  }

  // Trouver le projet correspondant
  const project = findProject(slug);

  // Si le projet n'existe pas, rediriger vers la page projets
  if (!project) {
    if (typeof window !== 'undefined') {
      router.push('/Projects');
    }
    return <div>Project not found</div>;
  }

  return (
    <>
      <Head>
        <title>Leo Séry - {project.Title}</title>
        <meta name="Leo Séry - Portfolio" content={project.Title}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectTemplate project={project} />
    </>
  );
}

// Cette fonction est optionnelle mais recommandée pour la SEO
export async function getStaticPaths() {
  // Générer tous les chemins possibles à partir de ProjectsData
  const paths = projectsData.map(project => ({
    params: { 
      // Extraire le slug de l'URL (ex: de "/Projects/poladroid" à "poladroid")
      slug: project.Url.split('/').pop() 
    }
  }));

  return {
    paths,
    fallback: false // Renvoie 404 si le slug n'existe pas
  };
}

// Cette fonction est obligatoire avec getStaticPaths
export async function getStaticProps({ params }) {
  return {
    props: {} // Sera fusionné avec les props de la page
  };
}