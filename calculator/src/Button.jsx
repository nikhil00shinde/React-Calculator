let Button = (props)=>{
    return(
        <div className = "small-button">
              {
                props.display.split(" ").map((el)=>{
                    return <div className="small" onClick = {(e)=>{
        
                         if(el === '=')
                         {
                            props.showResult()
                         }
                         else if(el === 'C')
                         {
                             props.changeAll();
                         }
                         else 
                         {
                                  props.assignInput(el);
                         }
                         
                    }}>{el}</div>
                })

              }
        </div>
    );
}

export default Button;