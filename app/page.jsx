// Import component LikeButton ke halaman ini.
import LikeButton from "./like-button";

// React component bernama Header yang berbentuk sebuah function.
function Header({ title }){
    return <h1>{title ? title : 'Default Title'}</h1>;
}

// React component bernama HomePage yang menempatkan component Header di dalamnya.
export default function HomePage(){

    // Array yang berisi nama.
    const nama = ['Kevin Dzaky', 'Rasya Elysia', 'Haikal Rizky'];

    return (
        <div>
            <Header title="Saya. Masih. Belajar." />
            <ul>
                {nama.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}