import { useForm } from "../hooks/useForm"


interface FormData{
    ciudad: string,
    postal: number
}

const Formulario2 = () => {

    const { ciudad, postal, formulario,handleChange } = useForm<FormData>({
        ciudad: "yo",
        postal: 123
    })

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label"> Ciudad: </label>
                <input type="text"
                    className="form-control"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleChange} />
            </div>


            <div className="mb-3">
                <label className="form-label"> Postal: </label>
                <input type="number"
                    className="form-control"
                    name="postal"
                    value={postal}
                    onChange={handleChange} />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}

export default Formulario2