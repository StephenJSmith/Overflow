import {getTags} from "@/lib/actions/tag-actions";
import TagCard from "@/app/tags/TagCard";
import TagsHeader from "@/app/tags/TagsHeader";

export default async function TagsPage() {
    const {data: tags, error} = await getTags();
    if (error) throw error;

    return (
        <div className='w-full px-6'>
            <TagsHeader />
            <div className='grid grid-cols-3 gap-4'>
                {tags?.map(tag => (
                    <TagCard key={tag.id} tag={tag} />
                ))}
            </div>
        </div>
    );
}
