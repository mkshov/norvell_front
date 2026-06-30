"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Box, Tab, Tabs, Typography, CircularProgress, Pagination } from "@mui/material";
import { MyModal } from "@/components";
import "@/app/suits/products.css";
import ApiProductCard from "@/components/ProductCard/ApiProductCard";
import { ApiProduct, ApiResponse, fetchProductsByType } from "@/utils/api/productsApi";

interface ApiProductsPageProps {
  typeIds: number[];
  link: string;
  pageTitle?: string;
}

const PAGE_SIZE = 20;

const ApiProductsPage: React.FC<ApiProductsPageProps> = ({ typeIds, link, pageTitle }) => {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortPrice, setSortPrice] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const ordering = sortPrice === "asc" ? "final_price" : "-final_price";

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const offset = (page - 1) * PAGE_SIZE;
      const data: ApiResponse = await fetchProductsByType(typeIds, {
        ordering,
        limit: PAGE_SIZE,
        offset,
      });
      setProducts(data.results);
      setTotalCount(data.count);
    } catch (err) {
      setError("Не удалось загрузить товары. Проверьте подключение.");
    } finally {
      setLoading(false);
    }
  }, [typeIds, ordering, page]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleSortChange = (_: React.SyntheticEvent, newValue: "asc" | "desc") => {
    setSortPrice(newValue);
    setPage(1);
  };

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <div>
      <Tabs value={sortPrice} onChange={handleSortChange} centered textColor="secondary" indicatorColor="secondary">
        <Tab sx={{ fontWeight: "bold" }} label="Сначала дешевле" value="asc" />
        <Tab sx={{ fontWeight: "bold" }} label="Сначала дороже" value="desc" />
      </Tabs>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : error ? (
        <Box sx={{ textAlign: "center", padding: "60px 20px" }}>
          <Typography variant="h6" color="error">{error}</Typography>
        </Box>
      ) : products.length === 0 ? (
        <Box sx={{ textAlign: "center", padding: "60px 20px" }}>
          <Typography variant="h6">Товары не найдены</Typography>
        </Box>
      ) : (
        <>
          <div className="card-container">
            {products.map((product) => (
              <ApiProductCard key={product.id} product={product} link={link} />
            ))}
          </div>
          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="secondary"
                shape="rounded"
              />
            </Box>
          )}
        </>
      )}

      <Box sx={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" color="secondary">
            Свяжитесь с нами, чтобы получить дополнительную информацию о наших костюмах
          </Typography>
          <MyModal />
        </Box>
      </Box>
    </div>
  );
};

export default ApiProductsPage;
