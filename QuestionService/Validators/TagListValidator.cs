using System.ComponentModel.DataAnnotations;

namespace QuestionService.Validators;

public class TagListValidator(int min, int max) : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value is not List<string> tags || tags.Count < min || tags.Count > max)
        {
            return new ValidationResult($"You must provide at least {min} and max {max} tags");
        }
        
        return ValidationResult.Success;
    }
}