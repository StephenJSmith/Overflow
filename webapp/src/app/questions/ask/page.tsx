import QuestionForm from "@/app/questions/ask/QuestionForm";

export default function Page() {
    return (
        <div className='px-6 pb-3'>
            <h3 className='text-3xl font-semibold'>Ask a public question</h3>
            <QuestionForm />
        </div>
    );
}