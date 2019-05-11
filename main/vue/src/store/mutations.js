let mutations={
    UPDATE_FOOT:(state,payload)=>{
        state.bFoot=payload;
    },
    UPDATE_USER:(state,payload)=>{
        state.user=payload
    },
    UPDATE_LOADING:(state,payload)=>{
        state.bLoading=payload
    },
    UPDATE_HOME:(state,payload)=>state.home=payload,
    // UPDATE_DETAIL:(state,payload)=>state.detail=payload,
}
export default mutations;
