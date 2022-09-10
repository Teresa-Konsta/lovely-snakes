import { Fragment } from "react";
import Head from "next/head";
import PageContainer from "../components/UI/PageContainer";

export default function Accessories() {
    return(
        <Fragment>
            <Head>
                <title>Lovely Snakes</title>
                <meta name="description" content="Information about corn snakes" />
            </Head>
        <PageContainer>
            <h3>Декор та Обладнання</h3>
        </PageContainer>
        </Fragment>
    );
}