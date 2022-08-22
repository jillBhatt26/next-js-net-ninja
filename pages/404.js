import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    // hooks
    const router = useRouter();

    // effects
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div className="not-found">
            <h1>Oops....</h1>
            <h2>The page cannot be found!</h2>
            <p>
                Go back to{' '}
                <Link href="/">
                    <a>Home Page</a>
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
