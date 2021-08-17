interface I{
    direction:"left"|"right"|"up"|"down";
    scrollAmount:5|10|15|20;
}
const props:I={
    direction:"left",
    scrollAmount:5
};
let ele:I=props;