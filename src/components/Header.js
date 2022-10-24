

function Header({money,total}){
    
    return (
        <div>
       <strong className="totalMoney">{
        <>
            {money - total} left to spend
        </>
        ||
        <>
            Your Cash = {money} $
        </>
        }</strong>
         <style jsx>
                {`
                .totalMoney{
                    margin: 20px;
                }
                `}
            </style>
        </div>
    );
}
export default Header