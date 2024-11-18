import {PostI} from "@/model/users.interface";
import {ThemedText} from "@/components/ThemedText";

export const Post = ({post}: { post: PostI }) => {
    return <ThemedText>
        {post.text}
    </ThemedText>
}
