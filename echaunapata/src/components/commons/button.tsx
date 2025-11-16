export default function Button({ text, color = "#F23413" }: { text: string, color?: string }) {
    return (
        <button className={`bg-[${color}] hover:bg-[${color}] text-white font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg`}>
            {text}
        </button>
    )
}