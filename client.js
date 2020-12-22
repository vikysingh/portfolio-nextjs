import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "lu1fkq09",
    dataset: "production",
    useCdn: false
})