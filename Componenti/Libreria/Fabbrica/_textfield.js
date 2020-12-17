export default function base() {
    return `border: none;
    background-color: #DCDCDC;
    color: #646464;
    padding: 15px 20px;
    font-weight: bolder;
    
    &::placeholder {
        color: #646464;
    }
    
    &:focus {
        background-color: #646464;
        color: #ffffff;
    }
    
    &:focus::placeholder {
        color: #ffffff;
    }`
}