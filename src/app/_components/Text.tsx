
export default function Text({ content, style }: 
    { content: string, style: string }
) {
    return (
        <p className={style}>{content}</p>
    );
}