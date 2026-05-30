import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 10;

export default function TechnologyPage() {
    const { tech } = useParams();

    const [questions, setQuestions] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        import(`../data/${tech}.json`)
            .then((data) => {
                setQuestions(data.default);
                setPage(1);
            })
            .catch(() => setQuestions([]));
    }, [tech]);

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const currentData = questions.slice(start, end);

    return (
        <>
            <Header />

            <main className="content">

                {currentData.map((item) => (
                    <QuestionCard
                        key={item.id}
                        question={item}
                    />
                ))}

                <Pagination
                    currentPage={page}
                    totalPages={Math.ceil(
                        questions.length / PAGE_SIZE
                    )}
                    onPageChange={setPage}
                />
            </main>
        </>
    );
}