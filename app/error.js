"use client"

export default function Error({ error, reset }) {
    return (
        <div>
            <h2>Somthing went wrong!</h2>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
}