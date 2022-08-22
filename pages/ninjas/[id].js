import { fetchNinjasInfo } from '../../services/ninjas';

// NOTE: This function will help next.js generate all the paths required to render each component available in the data that is fetched, during build time.
export const getStaticPaths = async () => {
    try {
        const ninjasData = await fetchNinjasInfo();

        const paths = ninjasData.map(ninja => {
            return {
                params: { id: ninja.id.toString() }
            };
        });

        return {
            paths,
            fallback: false
        };
    } catch (error) {
        console.log('static paths error: ', error.message);
    }
};

export const getStaticProps = async context => {
    const id = context.params.id;

    try {
        const responseData = await fetchNinjasInfo(id);

        return {
            // NOTE: Props key represents the props value of a component
            props: {
                ninja: responseData
            }
        };
    } catch (error) {
        console.log('fetch error: ', error.message);
    }
};

const NinjaDetails = ({ ninja }) => {
    return (
        <div>
            {ninja.name && <h1>{ninja.name}</h1>}

            {ninja.email && <p>{ninja.email}</p>}

            {ninja.website && <p>{ninja.website}</p>}

            {ninja.address && ninja.address.city && <p>{ninja.address.city}</p>}
        </div>
    );
};

export default NinjaDetails;
