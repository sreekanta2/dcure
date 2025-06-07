import { NextRequest, NextResponse } from "next/server";
import { doctorsData } from "../data";

interface Params {
  params: {
    doctorId?: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const doctorId = params.doctorId;
    if (!doctorId) {
      return NextResponse.json(
        { status: "fail", message: "Doctor ID not provided" },
        { status: 400 }
      );
    }

    // Find doctor by ID
    const doctor = doctorsData.find((item) => item.id === doctorId);
    if (!doctor) {
      return NextResponse.json(
        { status: "fail", message: "Doctor not found" },
        { status: 404 }
      );
    }

    // Pagination parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10);

    // Paginate reviews
    const totalReviews = doctor.reviews.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedReviews = doctor.reviews.slice(startIndex, endIndex);

    return NextResponse.json({
      status: "success",
      message: "Doctor data fetched successfully",
      data: {
        ...doctor, // Spread full doctor data
        reviews: paginatedReviews, // Replace reviews with paginated ones
      },
      pagination: {
        totalRecords: totalReviews,
        totalPages: Math.ceil(totalReviews / limit),
        currentPage: page,
        perPage: limit,
        hasNextPage: endIndex < totalReviews,
        hasPrevPage: startIndex > 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { status: "fail", message: "Something went wrong" },
      { status: 500 }
    );
  }
}
