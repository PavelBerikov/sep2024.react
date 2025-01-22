// функция для избежания ошибок с возможным налл в локал сторедж.
export const retriveLocalStorage =<T> (key:  string) => {
    //obj - это джейсон из стореджа, если сторедж пустой то в obj вкладываем пустую строку.
     const obj = localStorage.getItem(key) || ''
    // если obj фолс(пустая трока), возвращаем пустой типизованый объект
    if (!obj){
         return {} as T
     }
    // парсед -  парсанутый obj
     const parsed = JSON.parse(obj)
    // возвращаем  типизованый парсед в случае пропуска предидущего условия
     return parsed as T
 }