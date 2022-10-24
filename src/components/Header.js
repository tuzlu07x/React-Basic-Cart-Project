

function Header({money,total}){
    let leftSpend = money - total

    return (
        <div>
       <strong className="totalMoney">{
        <>
            {leftSpend} left to spend
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