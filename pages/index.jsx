import React from "react";
import Link from "next/link"


const Page = () => {
    return (
        <div>
            <h1>Index page</h1>
            <Link href="/notes"><button>go to notes</button></Link>
            </div>
    );
}

export default Page;