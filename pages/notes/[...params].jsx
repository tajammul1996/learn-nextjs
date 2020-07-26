import React from "react";
import { useRouter } from "next/router"

const Page = () => {
    const router = useRouter()
    const { params } = router.query;
    console.log(params)
    return (
    <div>Notes page¯</div>
    );
}

export default Page;