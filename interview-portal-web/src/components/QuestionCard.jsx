export default function QuestionCard({ question }) {
    return (
        <div className="card">
            <h3>{question.question}</h3>

            <div className="answer">
                {question.answer}
            </div>
        </div>
    );
}