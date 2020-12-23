import { useRouter } from 'next/router'

const progetto = () => {
    const router = useRouter()
    const { progetto } = router.query
    return (
        <div>
            ciao: {progetto}
        </div>
    );
}

export default progetto;