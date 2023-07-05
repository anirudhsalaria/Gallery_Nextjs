export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve,1000));
    throw Error("Hiyaaa");
    return(
        <div>
            Hello World
        </div>
    )
}