import CustomImage from "@/components/ImageComponent";
import Pagination from "@/components/PaginationComponents";
import { Rating } from "@/components/ui/rating";
import { IReview } from "@/types/patient";

interface IReviewProps {
  reviews: IReview[];
}
export default function ReviewPage({ reviews }: IReviewProps) {
  return (
    <div className="space-y-4" id="review">
      <h1 className="text-lg">Reviews ({reviews?.length})</h1>
      {reviews?.length > 0 &&
        reviews.map((review) => (
          <div className=" border bg-card rounded-md " key={review.id}>
            <div className=" p-4  flex justify-between items-center border-b">
              <div className="flex gap-4 items-start ">
                
                  <CustomImage
                          src={review?.patient?.image}
                          alt={review.comment}
                          aspectRatio="1/1"
                          className=" rounded-full w-full"
                          containerClass="w-12 h-12"
                        />
                   
                  
               
                <div>
                  <h3 className="text-lg font-bold text-default-600">
                    {review?.patient?.name}
                  </h3>
                  <p className="text-sm text-default-600">2023-04-15</p>
                </div>
              </div>
              <Rating
                value={review?.rating}
                readOnly
                className="gap-x-1.5 max-w-[125px]"
              />
            </div>

            <p className="p-4">{review?.comment}</p>
          </div>
        ))}
      <Pagination currentPage={1} totalPages={reviews.length} />
    </div>
  );
}
