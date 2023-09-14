const CarInfo = ({ el,deleteCard,setUpdateInfo }) => {
  const handleDelete=(e)=>{
    e.preventDefault()
    deleteCard('/cars/',el.id)
  }
  const handleUpdate=(e)=>{
    e.preventDefault()
    setUpdateInfo(el)
  }

  return (
    <article>
      {/* <h3>
            {`#${el.id} ${el.brand} ${el.model}`}
        </h3>

        <ul>
            <li>color:{el.color}</li>
            <li>price:{el.price}</li>
            <li>Year: {el.year}</li>
        </ul> */}

      <form>
        <h2>{el.id} {el.brand} {el.model}</h2>
        <br/>
        <div>
          <label htmlFor="id">Color</label>
          <div className="value-element">{el.color}</div>
        </div>
        <div>
          <label htmlFor="id">Price</label>
          <div className="value-element">{el.price}</div>
        </div>
        <div>
          <label htmlFor="id">year</label>
          <div className="value-element">{el.year}</div>
        </div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
      </form>
      
    </article>
  );
};

export default CarInfo;
