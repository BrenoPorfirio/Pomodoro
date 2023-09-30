
export function Home() {
    return(
    <div>
        <form action="">
            <div>
                <label htmlFor="">Vou trabalhar em</label>
                <input type="task" />

                <label htmlFor="">durante</label>
                <input type="number" id="minutesAmount" />

                <span>minutos.</span>
            </div>

            <div>
                <span>0</span>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
            </div>
            <button type="submit"></button>
        </form>
    </div>
    )
}