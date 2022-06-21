import Item from "./Item";

export default function Type({
   items,
   itemsArray,
   subTitle,
   dispatch,
   openDelete,
   message,
}) {
   return (
      <div>
         <h4>{subTitle}</h4>
         {itemsArray.length > 0 ? (
            <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
               {itemsArray.map((media) => (
                  <Item
                     key={media._id}
                     {...{ items, media, dispatch, openDelete }}
                  />
               ))}
            </div>
         ) : (
            <div className="dark:text-white">{message}</div>
         )}
      </div>
   );
}
