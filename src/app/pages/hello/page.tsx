export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve,1500));
    // throw Error("Hiyaaa");
    return(
        <div>
            Hello World
        </div>
    )
}