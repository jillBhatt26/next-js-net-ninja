import Link from 'next/link';
import { fetchNinjasInfo } from '../../services/ninjas';
import styles from '../../styles/Ninjas.module.css';

// Define the getStaticProps function to fetch the data required at build time
export const getStaticProps = async () => {
    try {
        const responseData = await fetchNinjasInfo();

        return {
            // NOTE: Props key represents the props value of a component
            props: {
                ninjas: responseData
            }
        };
    } catch (error) {
        console.log('fetch error: ', error.message);
    }
};

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>

            {ninjas.length > 0 &&
                ninjas.map(ninja => (
                    <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
        </div>
    );
};

export default Ninjas;
