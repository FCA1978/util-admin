/* 基础上报函数 */
export async function reportEvent(
  params: RsaHashedImportParams,
  reportType: string[] = [IMG, BEACON, AJAX]
) {
  let finalType = false;
  for (const key in reportType) {
    if (!finalType) {
      try {
        await EVENT_REPORT_FUNCTION_MAP[key](params).then(() => {
          finalType = true;
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
