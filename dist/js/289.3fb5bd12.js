"use strict";(self["webpackChunkmyprojectvuejs"]=self["webpackChunkmyprojectvuejs"]||[]).push([[289],{2289:function(e,s,r){r.r(s),r.d(s,{default:function(){return V}});var a=r(3396),t=r(9242),l=r(7139);const o={class:"vh-100 d-flex justify-content-center align-items-center",style:{background:"rgb(57 181 255)"}},n={class:"container"},i={class:"row d-flex justify-content-center"},c={class:"col-12 col-md-8 col-lg-6"},d={class:"card bg-white"},u={class:"card-body p-5"},m=(0,a._)("h2",{class:"fw-bold mb-2 text-uppercase",style:{"margin-left":"29%","padding-bottom":"22px"}}," Welcome ! ",-1),p={key:0,class:"alert alert-danger"},b={class:"mb-3"},g=(0,a._)("label",{for:"email",class:"form-label"},"Email address",-1),v={class:"mb-3"},w=(0,a._)("label",{for:"password",class:"form-label"},"Password",-1),f=(0,a._)("div",{class:"d-grid"},[(0,a._)("button",{class:"btn btn-outline-dark",type:"submit"}," Login ")],-1),h={class:"mb-0 text-center"},_=(0,a.Uk)(" Don't have an account? "),y=(0,a.Uk)("Sign Up");function k(e,s,r,k,U,x){const j=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",n,[(0,a._)("div",i,[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("div",u,[(0,a._)("form",{class:"mb-3 mt-md-4",onSubmit:s[2]||(s[2]=(0,t.iM)(((...e)=>x.loginUser&&x.loginUser(...e)),["prevent"]))},[m,U.messageError?((0,a.wg)(),(0,a.iD)("div",p,(0,l.zw)(U.messageError),1)):(0,a.kq)("",!0),(0,a._)("div",b,[g,(0,a.wy)((0,a._)("input",{type:"email",class:"form-control",id:"email",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=e=>U.user.email=e)},null,512),[[t.nr,U.user.email]])]),(0,a._)("div",v,[w,(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",id:"password",placeholder:"*******","onUpdate:modelValue":s[1]||(s[1]=e=>U.user.password=e)},null,512),[[t.nr,U.user.password]])]),f],32),(0,a._)("div",null,[(0,a._)("p",h,[_,(0,a.Wm)(j,{to:"/signin",class:"text-primary fw-bold"},{default:(0,a.w5)((()=>[y])),_:1})])])])])])])])])}r(4554);var U=r(4028),x=r(5696);const j=(0,U.v0)();var E={name:"LoginView",data(){return{user:{email:"",password:""},messageError:""}},methods:{loginUser(){(0,U.e5)(j,this.user.email,this.user.password).then((e=>{localStorage.setItem("uidUser",e.user.uid),this.$store.state.count>0?x.Z.push("/cart"):x.Z.push("/products")})).catch((()=>{this.messageError="invalid email and password"}))}}},D=r(89);const S=(0,D.Z)(E,[["render",k]]);var V=S}}]);
//# sourceMappingURL=289.3fb5bd12.js.map