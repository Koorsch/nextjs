const rootUrl = "https://swapi.dev/api/";

export async function getAll() {
    const res = await fetch(rootUrl);
    return await res.json();
}

export async function getAllByType({params}) {
    const {slug} = params;
    const res = await fetch(`${rootUrl}?${slug}`);
    console.log({slug});
    console.log(this);
    return await res.json();
}

export async function getBySlug(slug) {
    const res = await fetch(`${rootUrl}?slug=${slug}`);
    if (res.status !== 200) return {error: "Something went wrong!"};
    return await res.json();
}