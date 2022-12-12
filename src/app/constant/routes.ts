interface route{
  path:string;
  fullUrl:string;
}

export const ACCOUNT:route = {
  path:'account',
  get fullUrl():string{
    return `/${this.path}`
  }
}

export const LAYOUT:route = {
  path:'layout',
  get fullUrl():string{
    return `/${this.path}`
  }
}

export const DASHBOARD:route = {
  path:'dashboard',
  get fullUrl():string{
    return `${LAYOUT.fullUrl}/${this.path}`
  }
}

export const CATEGORY:route = {
  path:'category',
  get fullUrl():string{
    return `${LAYOUT.fullUrl}/${this.path}`
  }
}

export const MOBILE:route = {
  path:'mobile',
  get fullUrl():string{
    return `${CATEGORY.fullUrl}/${this.path}`
  }
}

export const CART:route = {
  path:'cart',
  get fullUrl():string{
    return `${MOBILE.fullUrl}/${this.path}`
  }
}
