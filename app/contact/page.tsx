import CustomInput from "@/components/inputs/custom";

export default function Contact() {
    return (
        <main className="flex-auto flex items-center justify-center">
            <div className="">
                <form action="">
                    <CustomInput name="email" placeholder="Email" type="email" />
                </form>
            </div>
        </main>
    )
}