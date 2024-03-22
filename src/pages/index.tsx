import Head from 'next/head';
import styles from '@/styles/home.module.scss';

import Image from 'next/image';
import techsImage from '../../public/images/techs.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao seu próximo nível</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na pratica, direto ao ponto aplicando o que usamos no mercado de trabalho.</span>
            <br />
            <a href="#">
              <button>Começar agora!</button>
            </a>
          </section>

          <img src="/images/banner-conteudos.png" alt="Conteúdos" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Conteúdo web" />

          <section>
            <h2>Aprenda criar sistemas web</h2>
            <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda criar aplicativos para Android e iOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero.</span>
          </section>

          <img src="/images/financasApp.png" alt="Conteúdo mobile" />
        </div>

        <div className={styles.nextLevelContent}>
          <Image quality={100} src={techsImage} alt='Tecnologias' />
          <h2>Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nível.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a href="#">
            <button>Acessar turma!</button>
          </a>
        </div>
      </main>
    </>
  );
}
