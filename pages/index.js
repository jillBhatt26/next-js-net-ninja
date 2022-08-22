import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <>
            <Head>
                <title>NinjaList | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>HomePage</h1>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, rem expedita. Iste delectus molestias ab at corrupti
                    aspernatur accusantium eum!
                </p>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, rem expedita. Iste delectus molestias ab at corrupti
                    aspernatur accusantium eum!
                </p>

                <Link href="/ninjas">
                    <a className={styles.btn}>List Ninjas</a>
                </Link>
            </div>
        </>
    );
};

export default Home;
