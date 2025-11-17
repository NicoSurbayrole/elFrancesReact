export const fetchItem = async (
  setItems,
  setLoading,
  setError,
  itemRef,
  getDocs
) => {
  try {
    setLoading(true);
    setError(null);

    const querySnap = await getDocs(itemRef);
    const items = querySnap.docs.map((doc) => doc.data());
    setItems(items);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};
